import { useSearchParams } from "react-router-dom";

function useParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function append(key: string, value: string) {
    searchParams.append(key, value);
    setSearchParams(searchParams);
  }

  function removeKeyValue(key: string, value: string) {
    //it works to remove exact key:value pairs from searchparams
    const toAddBack = searchParams.getAll(key).filter((val) => val !== value);
    searchParams.delete(key);
    toAddBack.forEach((val) => searchParams.append(key, val));
    setSearchParams(searchParams);
  }

  function resetPagination() {
    searchParams.delete("from");
    setSearchParams(searchParams);
  }

  return { searchParams, append, removeKeyValue, resetPagination };
}

export default useParams;
