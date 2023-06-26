import { useRouter } from "next/navigation";
import { Fragment } from "react";

type Props = {
  pageId: string;
  postType: string;
  children: any
};

export function DayInMonthPartClient({
  pageId,
  postType,
  children,
}: Props): JSX.Element {
  const router = useRouter();
  const daysInMonth: { index: number; id: string }[] = [
    { index: 1, id: "day_01" },
    { index: 2, id: "day_02" },
    { index: 3, id: "day_03" },
    { index: 4, id: "day_04" },
    { index: 5, id: "day_05" },
    { index: 6, id: "day_06" },
    { index: 7, id: "day_07" },
    { index: 8, id: "day_08" },
    { index: 9, id: "day_09" },
    { index: 10, id: "day_10" },
    { index: 11, id: "day_11" },
    { index: 12, id: "day_12" },
    { index: 13, id: "day_13" },
    { index: 14, id: "day_14" },
    { index: 15, id: "day_15" },
    { index: 16, id: "day_16" },
    { index: 17, id: "day_17" },
    { index: 18, id: "day_18" },
    { index: 19, id: "day_19" },
    { index: 20, id: "day_20" },
    { index: 21, id: "day_21" },
    { index: 22, id: "day_22" },
    { index: 23, id: "day_23" },
    { index: 24, id: "day_24" },
    { index: 25, id: "day_25" },
    { index: 26, id: "day_26" },
    { index: 27, id: "day_27" },
    { index: 28, id: "day_28" },
    { index: 29, id: "day_29" },
    { index: 30, id: "day_30" },
    { index: 31, id: "day_31" },
  ];
  const target = daysInMonth.find((day) => pageId.includes(day.id));
  const option = daysInMonth.map((day) => (
    <option value={day.id} key={day.index}>{`day ${day.index}`}</option>
  ));
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetPageId =
      pageId.substring(0, pageId.length - 6) + event.target.value;
    router.push(`/post/${postType}/${targetPageId}/`);
  };
  return (
    <Fragment>
      <select id="years" defaultValue={target?.id} onChange={onChange}>
        {option}
      </select>
      {children}
    </Fragment>
  );
}
