import { useEffect, useState } from "react";
import { getBreeds as fetchBreeds } from "../api";

function useBreeds() {
  const [allBreeds, setAllBreeds] = useState<string[]>([]);
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    const getBreeds = async () => {
      const getBreeds = await fetchBreeds();
      setAllBreeds(getBreeds.data);
      setBreeds(getBreeds.data);
    };

    getBreeds();
  }, []);

  const filterBreeds = (query: string) => {
    setBreeds(allBreeds.filter((breed) => breed.toLowerCase().includes(query)));
  };

  return { allBreeds, breeds, filterBreeds };
}

export default useBreeds;
