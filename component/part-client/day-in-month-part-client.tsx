import { ButtonTextPart } from "component/part";
import { zeroPad } from "lib/app/util/string-client-util";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

type Props = {
  id: string;
  postType: string;
};

export function DayInMonthPartClient({
  id,
  postType,
}: Props) {
  const router = useRouter();
  const daysInMonth = [];
  for (let i = 1; i < 32; i++) {
    daysInMonth.push({ index: i, id: "day_" + zeroPad(i, 2) });
  }
  const target = daysInMonth.find((day) => id.includes(day.id));
  const option = daysInMonth.map((day) => (
    <option value={day.id} key={day.index}>{`day ${day.index}`}</option>
  ));
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetid =
      id.substring(0, id.length - 6) + event.target.value;
    router.push(`/post/${postType}/${targetid}/`);
  };
  const targetidNext =
    id.substring(0, id.length - 6) +
    "day_" +
    zeroPad(((target?.index ?? 1) % 31) + 1, 2);
  const targetidPre =
    id.substring(0, id.length - 6) +
    "day_" +
    zeroPad((target?.index ?? 2) - 1 == 0 ? 31 : (target?.index ?? 2) - 1, 2);
  return (
    <Fragment>
      <select id="years" defaultValue={target?.id} onChange={onChange}>
        {option}
      </select>
      <ButtonTextPart href={`/post/${postType}/${targetidNext}/`}>
        {`day ${((target?.index ?? 1) % 31) + 1}`}
      </ButtonTextPart>
      <ButtonTextPart href={`/post/${postType}/${targetidPre}/`}>
        {`day ${(target?.index ?? 2) - 1 == 0 ? 31 : (target?.index ?? 2) - 1}`}
      </ButtonTextPart>
    </Fragment>
  );
}
