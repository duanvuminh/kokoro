import { MeanUtilsPartClientHook } from "app/lib/component/part-client";
import { example, otherQuestion } from "app/lib/const";
import { Fragment } from "react";

export function MeanUtilsPartClient({
  pageId,
}: {
  pageId: string;
}): JSX.Element {
  const { onClick, handleKeyDown, state } = MeanUtilsPartClientHook(pageId);

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
      {state.isLoading ? <div>Loading...</div> : <p>{state.displayText}</p>}
    </Fragment>
  );
}
