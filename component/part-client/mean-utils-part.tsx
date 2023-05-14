import { IMeanUtilsRepository } from "lib/repository";
import { myContainer } from "inversify.config";
import { TYPES, example, otherQuestion } from "lib/type";
import { Fragment, useState } from "react";

export function MeanUtilsPart({ pageId }: { pageId: string }): JSX.Element {
  const meanUtilsRepo = myContainer.get<IMeanUtilsRepository>(
    TYPES.IMeanUtilsRepository
  );
  const [displayText, setDisplayText] = useState("");
  const onClick = async () => {
    setDisplayText(await meanUtilsRepo.getExample(pageId));
  };
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      setDisplayText(
        await meanUtilsRepo.getQuestion(event.currentTarget.value)
      );
    }
  };
  return (
    <Fragment>
      <button className="btn-text" onClick={onClick}>
        {example}
      </button>
      <input
        placeholder={otherQuestion}
        className="pl-1 pr-1"
        onKeyDown={handleKeyDown}
      />
      <p>{displayText}</p>
    </Fragment>
  );
}
