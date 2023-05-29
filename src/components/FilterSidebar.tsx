import useBreeds from "../hooks/useBreeds";
import BreedsAcccordion from "./BreedsAccordion";

function FilterSidebar() {
  return (
    <aside className="flex flex-col w-fit h-screen bg-slate-400 p-6">
      <h2 className="text-2xl mb-4">Filter</h2>
      <BreedsAcccordion />
    </aside>
  );
}

export default FilterSidebar;
