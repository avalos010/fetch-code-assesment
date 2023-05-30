import { useEffect, useState } from "react";
import { getDogsIds, getDogs } from "../api";
import useParams from "../hooks/useParams";

export type Dog = {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
};

function useDogsSearch() {
  const { searchParams } = useParams();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchDogs = async () => {
      setIsLoading(true);
      const dogsIds = (await getDogsIds(searchParams)).data;
      setTotalResults(dogsIds.total);
      const dogs = (await getDogs(dogsIds.resultIds)).data;
      setDogs(dogs);
      setIsLoading(false);
    };

    fetchDogs();
  }, [searchParams]);

  return { dogs, isLoading, totalResults };
}

export default useDogsSearch;
