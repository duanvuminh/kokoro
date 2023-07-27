import {
  kyomoGetPostDataClient,
  kyomoPostPostDataClient,
} from "lib/api/api_client";
import { auth } from "lib/repository";
import { Fragment, useEffect, useState } from "react";

export async function EditPostPartClient({
  postId,
  postType,
}: {
  postId: string;
  postType: string;
}): Promise<JSX.Element> {
  const getMean = () => {
    kyomoGetPostDataClient("/api/mean-angolia?postId=" + postId).then(
      (data) => {
        if (data.result != "") {
          setContent(data.result);
        }
      }
    );
  };
  const onChange = (event: any) => {
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
        onChange={onChange}
      />
    </Fragment>
  );
}