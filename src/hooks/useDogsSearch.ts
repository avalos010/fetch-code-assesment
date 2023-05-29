import { useEffect, useState } from "react";
import { getDogsIds, getDogs } from "../api";

function useDogsSearch(searchParams: URLSearchParams) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const dogsIds = (await getDogsIds(searchParams)).data;
      const dogs = (await getDogs(dogsIds.resultIds)).data;
      setDogs(dogs);
    };

    fetchDogs();
  }, [searchParams]);

  return { dogs };
}

export default useDogsSearch;
