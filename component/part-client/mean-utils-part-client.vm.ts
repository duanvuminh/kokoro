import { kyomoFetchPage } from "lib/api";
import { useState } from "react";

export function MeanUtilsPartClientHook(postId: string) {
  const [state, setState] = useState({
    isLoading: false,
    displayText: "",
  });
  const onClick = () => {
    setState({
      isLoading: true,
      displayText: "",
    });
    kyomoFetchPage(`/api/example?postId=${postId}`).then((data) => {
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
      kyomoFetchPage(`/api/question?postId=${postId}`).then((data) => {
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
