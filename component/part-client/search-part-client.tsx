import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SearchPartClientHook } from "component/part-client";
import { searchNoData, searchPlaceHolder } from "lib/const";

const Turnstone = require("turnstone");
// Tailwind classes for Turnstone elements
const styles = {
  input:
    "w-full h-12 border border-oldsilver-300 py-2 pl-10 pr-7 text-xl outline-none rounded-full",
  inputFocus:
    "w-full h-12 border-x-0 border-t-0 border-b border-crystal-500 py-2 pl-2 pr-7 text-xl outline-none sm:rounded-full sm:border sm:pl-10",
  query: "text-oldsilver-800 placeholder-oldsilver-400",
  typeahead: "text-crystal-500 border-white",
  clearButton:
    "absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center text-crystal-500 hover:text-hotpink-300",
  listbox:
    "w-full bg-white sm:border sm:border-crystal-500 sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl",
  groupHeading:
    "cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-300",
  item: "cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-oldsilver-700",
  highlightedItem:
    "cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-oldsilver-700 rounded bg-crystal-100",
  match: "font-semibold",
  noItems: "cursor-default text-center my-20",
};

const Clear = () => <XMarkIcon className="w-5 h-5" />;

export function SearchPartClient() {
  const { listbox, maxItems, state, isPending, onBlur, onFocus, onSelect } =
    SearchPartClientHook();

  // Style the container so on mobile devices the search box and results
  // take up the whole screen
  const containerStyles = state.hasFocus
    ? "fixed block w-full h-full top-10 left-0 mb-2 bg-white z-50 overflow-auto sm:h-auto sm:top-auto sm:left-auto sm:bg-transparent sm:z-auto sm:overflow-visible sm:relative"
    : "relative mb-2";

  const iconDisplayStyle = state.hasFocus
    ? "hidden text-crystal-600"
    : "inline-flex text-oldsilver-400";

  return (
    <div className={containerStyles}>
      <span
        className={`absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 sm:inline-flex ${iconDisplayStyle}`}
      >
        {isPending ? (
          <svg
          className="animate-spin h-5 w-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
            className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            ></circle>
            <path
            className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <MagnifyingGlassIcon className="w-5 h-5" />
        )}
      </span>
      <Turnstone
        autoFocus={false}
        clearButton={true}
        debounceWait={0}
        id="autocomplete"
        listbox={listbox}
        listboxIsImmutable={true}
        matchText={true}
        maxItems={maxItems}
        noItemsMessage={searchNoData}
        onBlur={onBlur}
        onFocus={onFocus}
        onSelect={onSelect}
        placeholder={searchPlaceHolder}
        styles={styles}
        Clear={Clear}
      />
    </div>
  );
}
