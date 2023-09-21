import { kyomoGetPostDataClient } from "lib/api/api_client";
import { useState } from "react";

export function MeanUtilsPartClientHook(id: string) {
  const [state, setState] = useState({
    isLoading: false,
    displayText: "",
  });
  const onClick = () => {
    setState({
      isLoading: true,
      displayText: "",
    });
    kyomoGetPostDataClient(`/api/example?id=${id}`).then((data) => {
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
      kyomoGetPostDataClient(`/api/question?id=${event.currentTarget.value}`).then((data) => {
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
