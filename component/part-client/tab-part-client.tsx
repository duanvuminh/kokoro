import { TabPartClientHook } from "component/part-client";
import { levelList, settingLevel } from "lib/const";
import { Fragment } from "react";

export function TabPartClient() {
  const { selectTab, level } = TabPartClientHook();
  const activeClass =
    "inline-block p-4 text-blue-600 border-blue-600 rounded-t-lg active";
  const normalClass =
    "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:border-gray-300";
  const listItems = levelList.map((selectLevel) => (
    <li className="mr-2" key={selectLevel.id}>
      <button
        onClick={() => selectTab(selectLevel.id)}
        className={level == selectLevel.id ? activeClass : normalClass}
      >
        {selectLevel.name}
      </button>
    </li>
  ));
  return (
    <Fragment>
      <p>{settingLevel}</p>
      <div className="text-sm font-medium text-center text-gray-500">
        <ul className="flex flex-wrap -mb-px">{listItems}</ul>
      </div>
    </Fragment>
  );
}
