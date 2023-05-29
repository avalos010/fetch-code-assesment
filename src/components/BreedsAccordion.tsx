import useBreeds from "../hooks/useBreeds";
import useParams from "../hooks/useParams";
import Accordion from "./Accordion";

function BreedsAcccordion() {
  const { breeds, filterBreeds } = useBreeds();
  const { append, removeKeyValue, searchParams } = useParams();
  const checked = searchParams.getAll("breed");

  const handleCheckboxChange = (breed: string) => {
    if (checked.includes(breed)) {
      removeKeyValue("breed", breed);
      return;
    }
    append("breed", breed);
    return;
  };

  return (
    <div className="flex flex-col">
      <Accordion title="Breeds">
        <div className="flex flex-col items-baseline p-4 gap-2 bg-slate-300 relative">
          <input
            className="p-2 mt-2 mb-4"
            placeholder="filter breeds."
            alt="breeds filter textbox"
            aria-label="breeds filter textbox"
            type="text"
            onChange={(e) => filterBreeds(e.target.value)}
          />
          {breeds.map((breed) => (
            <div className="flex flex-row-reverse gap-1" key={breed}>
              <label htmlFor={breed}>{breed}</label>
              <input
                onChange={() => handleCheckboxChange(breed)}
                id={breed}
                key={breed}
                type="checkbox"
                multiple
                value={breed}
                alt={breed}
                aria-label={breed}
                placeholder={breed}
                checked={checked.includes(breed)}
                name="breed"
              />
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}

export default BreedsAcccordion;
