import { useContext, useState } from "react";
import useDogsSearch, { Dog } from "../hooks/useDogsSearch";
import DogCard from "./DogCard";
import Pagination from "./Pagination";
import SortingMenu from "./SortingMenu";
import Spinner from "./Spinner";
import { ModalContext } from "../providers/ModalProvider";
import SelectedBreeds from "./SelectedBreeds";
import Match from "./Match";
import Chips from "./Chips";

function Breeds() {
  const { dogs, isLoading } = useDogsSearch();
  const [selected, setSelected] = useState<Dog[]>([]);
  const { openModal } = useContext(ModalContext);

  const handleSelect = (dog: Dog) => {
    setSelected((prev) => [dog, ...prev]);
  };

  const handleUnselect = (dog: Dog) => {
    setSelected((prev) => prev.filter((item) => item.id !== dog.id));
  };

  return (
    <div className="w-full">
      <Chips />
      {selected.length > 0 ? (
        <div className="flex flex-row justify-center gap-2">
          <button
            className="bg-black text-white p-4"
            onClick={() => openModal(<SelectedBreeds selected={selected} />)}
          >
            Show Selected ({selected.length})
          </button>

          <button
            className="bg-black text-white p-4"
            onClick={() => openModal(<Match dogs={selected} />)}
          >
            Get Match
          </button>
        </div>
      ) : null}

      {isLoading ? <Spinner /> : null}
      <Pagination />
      <SortingMenu />
      <div className="flex flex-row gap-4 mx-auto flex-wrap justify-center">
        {dogs.map((dog) => {
          return (
            <DogCard
              selectedItems={selected}
              key={dog.id}
              dog={dog}
              handleUnselect={() => handleUnselect(dog)}
              handleSelect={() => handleSelect(dog)}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}
export default Breeds;
