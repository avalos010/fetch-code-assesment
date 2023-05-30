import useDogsSearch from "../hooks/useDogsSearch";
import DogCard from "./DogCard";
import Pagination from "./Pagination";
import SortingMenu from "./SortingMenu";
import Spinner from "./Spinner";

function Breeds() {
  const { dogs, isLoading } = useDogsSearch();

  return (
    <div className="w-full">
      {isLoading ? <Spinner /> : null}
      <SortingMenu />
      <div className="flex flex-row gap-4 mx-auto flex-wrap justify-center">
        {dogs.map((dog) => {
          return <DogCard key={dog.id} dog={dog} />;
        })}
      </div>
      <Pagination />
    </div>
  );
}
export default Breeds;
