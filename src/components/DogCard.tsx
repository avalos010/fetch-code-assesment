import { Dog } from "../hooks/useDogsSearch";

function DogCard({
  dog: { id, name, breed, age, zip_code, img },
}: {
  dog: Dog;
}) {
  return (
    <div key={id} className="p-4 shadow-md shadow-slate-500">
      <h2 className="text-3xl">{name}</h2>
      <h3 className="text-xl text-slate-700">{breed}</h3>
      <img
        className="mt-4"
        width={250}
        src={img}
        alt={`image of a ${breed} named ${name}`}
      />

      <div className=" flex flex-col align-bottom justify-end">
        <p className="text-slate-700 font-semibold">Age: {age}</p>
        <p>location: {zip_code}</p>
      </div>
    </div>
  );
}

export default DogCard;
