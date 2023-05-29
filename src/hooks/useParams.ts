import { useSearchParams } from "react-router-dom";

function useParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  function append(key: string, value: string) {
    searchParams.append(key, value);
    setSearchParams(searchParams);
  }

  function removeKeyValue(key: string, value: string) {
    const val = value.replaceAll(" ", "+");
    setSearchParams(searchParams.toString().replace(`${key}=${val}`, ""));
  }

  return { searchParams, append, removeKeyValue };
}

export default useParams;
