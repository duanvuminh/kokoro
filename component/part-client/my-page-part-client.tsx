import { ButtonTextPart } from "component/part";
import {
  GoogleLoginPartClient,
  TabPartClient,
  useAppContext,
} from "component/part-client";
import { avartaImage, kanjiStroke, logout } from "lib/app/const/app-text-client-const";
import { auth } from "lib/app/service/firestore-repository";
import Image from "next/image";
import { Fragment } from "react";

export function MyPagePartClient() {
  const { token } = useAppContext();
  const onClickLogout = () => {
    auth.signOut();
  };

  let imageUrl = "";
  let name = "";
  let email = "";
  if (token != "") {
    imageUrl = auth.currentUser?.photoURL ?? "";
    name = auth.currentUser?.displayName ?? "";
    email = auth.currentUser?.email ?? "";
  }
  const commonSetting = (
    <div>
      <TabPartClient />
      <p className="mt-4">{kanjiStroke}</p>
      <ButtonTextPart href="/post/single-page/Stroke">stroke</ButtonTextPart>
    </div>
  );
  return token == "" ? (
    <Fragment>
      {commonSetting}
      <GoogleLoginPartClient />
    </Fragment>
  ) : (
    <Fragment>
      <div className="flex items-center mb-4 justify-center">
        <Image
          className="rounded-full mr-4"
          src={imageUrl}
          alt={avartaImage}
          width={50}
          height={50}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{name}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      {commonSetting}
      <button
        className="btn-text float-right"
        aria-label="login"
        onClick={onClickLogout}
      >
        {logout}
      </button>
    </Fragment>
  );
}
