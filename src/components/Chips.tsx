import useParams from "../hooks/useParams";
import Chip from "./Chip";

function Chips() {
  const { searchParams, removeKeyValue } = useParams();
  const selectedBreeds = searchParams.getAll("breed");

  return (
    <div className="flex flex-row flex-wrap  justify-center gap-4">
      {selectedBreeds.map((item) => {
        return (
          <Chip
            name={item}
            key={item}
            onRemove={() => removeKeyValue("breed", item)}
          />
        );
      })}
    </div>
  );
}

export default Chips;
