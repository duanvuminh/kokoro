import { postData } from "lib/api";
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
    postData("/api/example", {
      pageId: pageId,
    }).then((data) => {
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
      postData("/api/question", {
        pageId: event.currentTarget.value,
      }).then((data) => {
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
