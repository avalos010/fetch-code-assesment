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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      setIsLoading(true);
      const dogsIds = (await getDogsIds(searchParams)).data;
      const dogs = (await getDogs(dogsIds.resultIds)).data;
      setDogs(dogs);
      setIsLoading(false);
    };

    fetchDogs();
  }, [searchParams]);

  return { dogs, isLoading };
}

export default useDogsSearch;
