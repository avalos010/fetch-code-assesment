import useDogsSearch from "../hooks/useDogsSearch";

function Breeds() {
  const { searchParams } = useParams();
  const { dogs } = useDogsSearch(searchParams);

  console.log(dogs, "breeds");

  return (
    <div>
      <h1>Breeds</h1>
    </div>
  );
}
import useParams from "../hooks/useParams";

export default Breeds;
