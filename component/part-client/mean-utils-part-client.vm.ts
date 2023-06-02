import { useState } from "react";

export function MeanUtilsPartClientHook(pageId: string) {
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
  return {
    state,
    onClick,
    handleKeyDown,
  };
}
