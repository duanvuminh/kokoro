import { MeanUtilsPartClientHook } from "component/part-client";
import { example, otherQuestion } from "lib/const/app-text-client-const";
import { Fragment } from "react";

export function MeanUtilsPartClient({
  id,
}: {
  id: string;
}): JSX.Element {
  const { onClick, handleKeyDown, state } = MeanUtilsPartClientHook(id);
  const listItems = state.displayText.map((text, index) => (
    <p key={index}>{`${index + 1}.${text}`}</p>
  ));
  return (
    <Fragment>
      <button className="btn-text" onClick={onClick}>
        {example}
      </button>
      <input
        name="question-box"
        placeholder={otherQuestion}
        className="pl-1 pr-1"
        onKeyDown={handleKeyDown}
      />
      {state.isLoading ? <div>Loading...</div> : listItems}
    </Fragment>
  );
}
