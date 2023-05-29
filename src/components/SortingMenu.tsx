import useParams from "../hooks/useParams";

function SortingMenu() {
  const { append, searchParams } = useParams();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
    searchParams.delete("sort");
    append("sort", sort);
  };
  return (
    <div className="flex justify-end m-5 p-4">
      <label htmlFor="sort">Sort:</label>
      <select
        defaultValue={searchParams.get("sort") as string}
        onChange={handleSortChange}
        id="sort"
        className="flex"
      >
        <option value="breed:asc">Ascending: breed</option>
        <option value="breed:desc">Descending: breed</option>
        <option value="name:asc">Ascending: name</option>
        <option value="name:desc">Descending: name</option>
        <option value="age:asc">Ascending: age</option>
        <option value="age:desc">Descending age</option>
      </select>
    </div>
  );
}

export default SortingMenu;
