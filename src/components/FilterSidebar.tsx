import BreedsAcccordion from "./BreedsAccordion";
import ZipAccordion from "./ZipAccordion";

function FilterSidebar() {
  return (
    <aside className="flex flex-col w-fit h-[700px] bg-slate-400 p-6 gap-8">
      <h2 className="text-2xl mb-4">Filter</h2>
      <BreedsAcccordion />
      <ZipAccordion />
    </aside>
  );
}

export default FilterSidebar;
