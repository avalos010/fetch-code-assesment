import useDogsSearch from "../hooks/useDogsSearch";

function Breeds() {
  const { searchParams } = useParams();
  const { dogs } = useDogsSearch(searchParams);

  console.log(dogs, "breeds");

  return (
    <div>
      <div className="flex flex-row gap-4 mt-10 flex-wrap justify-around">
        {dogs.map((dog) => {
          return <DogCard key={dog.id} dog={dog} />;
        })}
      </div>
    </div>
  );
}
import useParams from "../hooks/useParams";
import DogCard from "./DogCard";

export default Breeds;
