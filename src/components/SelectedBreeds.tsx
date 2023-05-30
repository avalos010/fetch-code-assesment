import { Dog } from "../hooks/useDogsSearch";
import DogCard from "./DogCard";

function SelectedBreeds({ selected }: SelectedBreedsProps) {
  return (
    <div className="bg-white p-3 max-w-[80%] h-full overflow-y-scroll">
      <h3 className="text-3xl m-3">Selected Breeds</h3>
      <div className="flex flex-row flex-wrap gap-3">
        {selected.map((dog) => (
          <DogCard selectedItems={selected} key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
  );
}

export default SelectedBreeds;

type SelectedBreedsProps = {
  selected: Dog[];
};
