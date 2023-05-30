import { useSearchParams } from "react-router-dom";

function useParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function append(key: string, value: string) {
    searchParams.append(key, value);
    setSearchParams(searchParams);
  }

  function removeKeyValue(key: string, value: string) {
    const val = value.replaceAll(" ", "+");
    const params = searchParams.toString().replace(`${key}=${val}`, "");
    setSearchParams(params);
  }

  function resetPagination() {
    searchParams.delete("from");
    setSearchParams(searchParams);
  }

  return { searchParams, append, removeKeyValue, resetPagination };
}

export default useParams;
