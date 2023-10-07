import { useAppContext } from "component/part-client";
import { ButtonTextPart } from "component/part/button-text-part";
import { kanji, practice, tuVung } from "lib/app/const/app-text-client-const";
import { levelList } from "lib/app/const/type-client-const";
import { Fragment } from "react";

export function HomePartClient() {
  const date = new Date();
  const day = date.getDate();
  const dayStr = ("0" + day).slice(-2);
  const { level } = useAppContext();
  return (
    <Fragment>
      <ButtonTextPart
        href={`/post/kanji-list/${levelList[level]?.name}_day_${dayStr}`}
      >
        {kanji}
      </ButtonTextPart>
      <ButtonTextPart
        href={`/post/word-list/${levelList[level]?.name}_day_${dayStr}`}
      >
        {tuVung}
      </ButtonTextPart>
      <ButtonTextPart href={`/post/practice-list/all`}>
        {practice}
      </ButtonTextPart>
    </Fragment>
  );
}
