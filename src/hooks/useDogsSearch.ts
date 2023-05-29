import { useEffect, useState } from "react";
import { searchDogs } from "../api";

function useDogsSearch(searchParams: URLSearchParams) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const dogs = searchDogs(searchParams);
    };

    getDogs();
  }, [searchParams]);

  return { dogs };
}

export default useDogsSearch;
