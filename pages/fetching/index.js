import Link from "next/link";
import React from "react";

function fetching({ people }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl">List of rick and morty users</h1>
      {people.map((person) => (
        <Link key={person.id} href={`/fetching/${person.id}`}>
          <h1 className="pt-3 cursor-pointer hover:opacity-70 ">
            {person.id}) {person.name}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default fetching;

export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();

  return {
    props: {
      people: results,
    },
  };
};
