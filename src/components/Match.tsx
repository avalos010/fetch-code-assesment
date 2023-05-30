import { useEffect, useState } from "react";
import { getMatch } from "../api";
import { Dog } from "../hooks/useDogsSearch";
import DogCard from "./DogCard";

function Match({ dogs }: MatchProps) {
  const [match, setMatch] = useState<Dog | undefined>(undefined);

  useEffect(() => {
    if (dogs.length > 0) {
      const findMatch = async () => {
        const matchId = (await getMatch(dogs.map((dog) => dog.id))).data.match;
        if (matchId) {
          setMatch(dogs.find((dog) => dog.id === matchId));
        }
      };
      findMatch();
    }
  }, [dogs]);

  if (match) {
    return (
      <div className="bg-white p-4">
        <h3 className="text-3xl my-4">Here is your Match!</h3>
        <DogCard dog={match} />
      </div>
    );
  }

  return null;
}

type MatchProps = {
  dogs: Dog[];
};

export default Match;
