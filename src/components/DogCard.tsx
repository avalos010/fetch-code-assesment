import { Dog } from "../hooks/useDogsSearch";

function DogCard({
  dog: { id, name, breed, age, zip_code, img },
  handleSelect,
  handleUnselect,
  selectedItems,
}: DogCardProps) {
  const isSelected = selectedItems.includes(id);

  const handleToggleSelect = () => {
    if (isSelected) {
      handleUnselect(id);
    } else {
      handleSelect(id);
    }
  };

  return (
    <div key={id} className="p-4 shadow-md shadow-slate-500 relative">
      <h2 className="text-3xl">{name}</h2>
      <h3 className="text-xl text-slate-700">{breed}</h3>
      <img
        className="mt-4"
        width={250}
        src={img}
        alt={`image of a ${breed} named ${name}`}
      />

      <div className=" flex flex-col align-bottom justify-end mb-5">
        <p className="text-slate-700 font-semibold">Age: {age}</p>
        <p>location: {zip_code}</p>
      </div>
      <button
        onClick={handleToggleSelect}
        className={`${
          isSelected ? "bg-slate-200 text-black" : "bg-black text-white"
        } w-full absolute bottom-0 left-0 right-0`}
      >
        {isSelected ? "Unselect" : "Select"}
      </button>
    </div>
  );
}

export default DogCard;

type DogCardProps = {
  dog: Dog;
  handleUnselect: (id: string) => void;

  handleSelect: (id: string) => void;
  selectedItems: string[];
};
