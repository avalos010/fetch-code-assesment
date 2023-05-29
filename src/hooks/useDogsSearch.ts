import { useEffect, useState } from "react";
import { getDogsIds, getDogs } from "../api";

export type Dog = {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
};

function useDogsSearch(searchParams: URLSearchParams) {
  const [dogs, setDogs] = useState<Dog[]>([]);

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
