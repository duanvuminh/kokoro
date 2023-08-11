import { kyomoGetPostDataClient } from "lib/api/api_client";
import { useState } from "react";

export function MeanUtilsPartClientHook(id: string) {
  const [state, setState] = useState({
    isLoading: false,
    displayText: [] as string[],
  });
  const onClick = () => {
    setState({
      isLoading: true,
      displayText: [],
    });
    kyomoGetPostDataClient(`/api/example?id=${id}`).then((data) => {
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
      kyomoGetPostDataClient(`/api/question?id=${id}`).then((data) => {
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
