import useDogsSearch from "../hooks/useDogsSearch";
import useParams from "../hooks/useParams";
import DogCard from "./DogCard";
import SortingMenu from "./SortingMenu";
import Spinner from "./Spinner";

function Breeds() {
  const { searchParams } = useParams();
  const { dogs, isLoading } = useDogsSearch(searchParams);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <SortingMenu />
      <div className="flex flex-row gap-4 mt-16 flex-wrap justify-around">
        {dogs.map((dog) => {
          return <DogCard key={dog.id} dog={dog} />;
        })}
      </div>
    </div>
  );
}
export default Breeds;
