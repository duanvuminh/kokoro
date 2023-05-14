import { TYPES, example, otherQuestion } from "lib/type";
import { Fragment, useState } from "react";

interface ResponseData {
  result: string;
}

export function MeanUtilsPart({ pageId }: { pageId: string }): JSX.Element {
  const [state, setState] = useState({
    isLoading: false,
    displayText: "",
  });
  const onClick = () => {
    setState({
      isLoading: true,
      displayText: "",
    });
    fetch("/api/example", {
      method: "POST",
      body: JSON.stringify({ pageId: pageId }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState({
          isLoading: false,
          displayText: data.result,
        });
      });
  };
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setState({
        isLoading: true,
        displayText: "",
      });
      // 👇 Get input value
      fetch("/api/question", {
        method: "POST",
        body: JSON.stringify({ pageId: event.currentTarget.value }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setState({
            isLoading: false,
            displayText: data.result,
          });
        });
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
      {state.isLoading ? <div>Loading...</div> : <p>{state.displayText}</p>}
    </Fragment>
  );
}
