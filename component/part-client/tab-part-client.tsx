import { ButtonTextPart } from "component/part";
import { kanji, nguPhap, tuVung, N1, N2, N3, N4, N5 } from "lib/const";
import { Fragment } from "react";
import { TabPartClientHook } from "component/part-client";

interface Level {
  id: number;
  name: string;
}

export function TabPartClient() {
  const {
    selectTab,
    state: { index },
  } = TabPartClientHook();
  const disableClass =
    "inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed";
  const activeClass =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active";
  const normalClass =
    "inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300";
  const levelList: Level[] = [
    {
      id: 0,
      name: N1,
    },
    {
      id: 1,
      name: N2,
    },
    {
      id: 2,
      name: N3,
    },
    {
      id: 3,
      name: N4,
    },
    {
      id: 4,
      name: N5,
    },
  ];

  const listItems = levelList.map((level) => (
    <li className="mr-2" key={level.id}>
      <a
        onClick={() => selectTab(level.id)}
        className={index == level.id ? activeClass : normalClass}
      >
        {level.name}
      </a>
    </li>
  ));
  return (
    <Fragment>
      <div className="text-sm font-medium text-center text-gray-500">
        <ul className="flex flex-wrap -mb-px">{listItems}</ul>
      </div>
      <ButtonTextPart href={`/post/subject/${levelList[index].name}_0`}>
        {kanji}
      </ButtonTextPart>
      <ButtonTextPart href="/post/subject/Stroke">stroke</ButtonTextPart>
    </Fragment>
  );
}
