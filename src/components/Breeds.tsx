import { useContext, useEffect, useState } from "react";
import useDogsSearch, { Dog } from "../hooks/useDogsSearch";
import DogCard from "./DogCard";
import Pagination from "./Pagination";
import SortingMenu from "./SortingMenu";
import Spinner from "./Spinner";
import { ModalContext } from "../providers/ModalProvider";
import SelectedBreeds from "./SelectedBreeds";

function Breeds() {
  const { dogs, isLoading } = useDogsSearch();
  const [selected, setSelected] = useState<Dog[]>([]);
  const { openModal, closeModal } = useContext(ModalContext);

  const handleSelect = (dog: Dog) => {
    setSelected((prev) => [dog, ...prev]);
  };

  const handleUnselect = (dog: Dog) => {
    setSelected((prev) => prev.filter((item) => item.id !== dog.id));
  };

  useEffect(() => {
    if (selected.length === 0) {
      closeModal();
    }
  }, [selected]);

  return (
    <div className="w-full">
      {selected.length > 0 ? (
        <button
          className="bg-black text-white p-4 mx-auto block"
          onClick={() => openModal(<SelectedBreeds selected={selected} />)}
        >
          Show Selected ({selected.length})
        </button>
      ) : null}

      {isLoading ? <Spinner /> : null}
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
