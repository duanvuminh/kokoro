import { ButtonTextPart } from "component/part";
import { zeroPad } from "lib/util";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

type Props = {
  postId: string;
  postType: string;
  children: any;
};

export function DayInMonthPartClient({
  postId,
  postType,
  children,
}: Props): JSX.Element {
  const router = useRouter();
  const daysInMonth = [];
  for (let i = 1; i < 32; i++) {
    daysInMonth.push({ index: i, id: "day_" + zeroPad(i, 2) });
  }
  const target = daysInMonth.find((day) => postId.includes(day.id));
  const option = daysInMonth.map((day) => (
    <option value={day.id} key={day.index}>{`day ${day.index}`}</option>
  ));
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetpostId =
      postId.substring(0, postId.length - 6) + event.target.value;
    router.push(`/post/${postType}/${targetpostId}/`);
  };
  const targetpostIdNext =
    postId.substring(0, postId.length - 6) +
    "day_" +
    zeroPad(((target?.index ?? 1) % 31) + 1, 2);
  const targetpostIdPre =
    postId.substring(0, postId.length - 6) +
    "day_" +
    zeroPad((target?.index ?? 2) - 1, 2);
  return (
    <Fragment>
      <select id="years" defaultValue={target?.id} onChange={onChange}>
        {option}
      </select>
      <ButtonTextPart href={`/post/${postType}/${targetpostIdNext}/`}>
        {`day ${((target?.index ?? 1) % 31) + 1}`}
      </ButtonTextPart>
      <ButtonTextPart href={`/post/${postType}/${targetpostIdPre}/`}>
        {`day ${(target?.index ?? 2) - 1}`}
      </ButtonTextPart>
      {children}
    </Fragment>
  );
}
