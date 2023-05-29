import { useState } from "react";
import BreedsAcccordion from "./BreedsAccordion";
import ZipAccordion from "./ZipAccordion";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function FilterSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 hover:text-slate-400"
      >
        <AdjustmentsHorizontalIcon width={50} />
      </button>
      <aside
        className={`flex flex-col w-max top-0 h-[1000px] fixed bg-slate-400 p-6 gap-8 transition-all ${
          isOpen ? "left-0" : "left-[-1000px]"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold absolute right-3 hover:text-slate-100"
        >
          <XMarkIcon width={50} />
        </button>
        <h2 className="text-2xl mb-4">Filter</h2>
        <BreedsAcccordion />
        <ZipAccordion />
      </aside>
    </div>
  );
}

export default FilterSidebar;
