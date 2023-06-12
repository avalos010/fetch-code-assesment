import useParams from "../hooks/useParams";
import Chip from "./Chip";

function Chips() {
  const { searchParams, removeKeyValue } = useParams();
  const list: string[] = [];
  searchParams.forEach((item) => list.push(item));

  return (
    <div className="flex flex-row flex-wrap  justify-center gap-4">
      {list.map((item) => {
        const isBreedFilter = searchParams.getAll("breed").includes(item);
        return (
          <Chip
            name={item}
            key={item}
            onRemove={() =>
              removeKeyValue(isBreedFilter ? "breed" : "zipCode", item)
            }
          />
        );
      })}
    </div>
  );
}

export default Chips;
