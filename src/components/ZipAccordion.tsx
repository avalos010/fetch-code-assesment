import { useRef } from "react";
import Accordion from "./Accordion";
import useParams from "../hooks/useParams";
function ZipAccordion() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { append, removeKeyValue, searchParams, resetPagination } = useParams();

  const zips = searchParams.getAll("zipCode");

  function addZip(event: React.KeyboardEvent<HTMLInputElement>) {
    if (inputRef.current && event.key === "Enter") {
      const value = inputRef.current.value;
      const url = searchParams.toString();
      if (!url.includes(`zipCode=${value}`)) {
        //only append if the exact zip is not already included in the searchparams
        append("zipCode", value);
        resetPagination();
      }
      inputRef.current.value = "";
    }
  }

  function removeZip(zip: string) {
    removeKeyValue("zipCode", zip);
  }

  return (
    <div className=" bg-slate-300">
      <Accordion title="Zip Code">
        <div className="flex flex-row justify-between relative p-4">
          <input
            className="p-4 w-full mt-2 mb-4"
            ref={inputRef}
            type="number"
            placeholder="ZipCode"
            onKeyDown={addZip}
          />
        </div>

        <div className="flex flex-col p-4 gap-4 ml-3">
          {zips.map((zip) => (
            <div key={zip} className="flex flex-row justify-between">
              <p key={zip}>{zip}</p>
              <button onClick={() => removeZip(zip)}>-</button>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}

export default ZipAccordion;
