import { useState } from "react";
import useDogsSearch from "../hooks/useDogsSearch";
import DogCard from "./DogCard";
import Pagination from "./Pagination";
import SortingMenu from "./SortingMenu";
import Spinner from "./Spinner";

function Breeds() {
  const { dogs, isLoading } = useDogsSearch();
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    setSelected((prev) => [id, ...prev]);
  };

  const handleUnselect = (id: string) => {
    setSelected((prev) => prev.filter((item) => item !== id));
  };

  return (
    <div className="w-full">
      {selected.length}
      {isLoading ? <Spinner /> : null}
      <SortingMenu />
      <div className="flex flex-row gap-4 mx-auto flex-wrap justify-center">
        {dogs.map((dog) => {
          return (
            <DogCard
              selectedItems={selected}
              key={dog.id}
              dog={dog}
              handleUnselect={() => handleUnselect(dog.id)}
              handleSelect={() => handleSelect(dog.id)}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}
export default Breeds;
