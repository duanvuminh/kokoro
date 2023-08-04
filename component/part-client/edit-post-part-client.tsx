import {
  kyomoGetPostDataClient,
  kyomoPostPostDataClient,
} from "lib/api/api_client";
import { auth } from "lib/repository/firestore-repository";
import { Fragment, useEffect, useState } from "react";

export function EditPostPartClient({
  postId,
  postType,
}: {
  postId: string;
  postType: string;
}): JSX.Element {
  const getMean = () => {
    kyomoGetPostDataClient("/api/mean-angolia?postId=" + postId).then(
      (data) => {
        if (data.result != "") {
          setContent(data.result);
        }
      }
    );
  };
  const onBlur = (event: any) => {
    auth.currentUser?.getIdToken().then((token) => {
      kyomoPostPostDataClient("/api/user/edit-mean", {
        postId: postId,
        value: event.target.value,
        token: token,
      });
    });
  };
  const [content, setContent] = useState("");

  useEffect(() => {
    kyomoGetPostDataClient("/api/mean-for-edit-angolia?postId=" + postId).then(
      (data) => {
        if (data.result != "") {
          setContent(data.result);
        } else {
          getMean();
        }
      }
    );
    return () => {};
  }, []);

  return (
    <Fragment>
      <textarea
        rows={10}
        className="w-full"
        defaultValue={content}
        onBlur={onBlur}
      />
    </Fragment>
  );
}
