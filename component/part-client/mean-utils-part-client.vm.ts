import { kyomoGetPostDataClient } from "lib/api/api_client";
import { useState } from "react";

export function MeanUtilsPartClientHook(postId: string) {
  const [state, setState] = useState({
    isLoading: false,
    displayText: [] as string[],
  });
  const onClick = () => {
    setState({
      isLoading: true,
      displayText: [],
    });
    kyomoGetPostDataClient(`/api/example?postId=${postId}`).then((data) => {
      setState({
        isLoading: false,
        displayText: data.result.split(/\d\./g).filter((e: string) => e !== ""),
      });
    });
  };
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setState({
        isLoading: true,
        displayText: [],
      });
      kyomoGetPostDataClient(`/api/question?postId=${postId}`).then((data) => {
        setState({
          isLoading: false,
          displayText: [data.result],
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
