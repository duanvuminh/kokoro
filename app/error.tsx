"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Server is busy!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
