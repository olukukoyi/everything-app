import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

function DetailsPage({ data }) {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image
            src={data.image}
            alt={data.name}
            width="200px"
            height="200px"
          />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <span>
            Name: <a className="text-sm font-bold">{data.name}</a>
          </span>
          <span>
            Location: <a className="text-sm font-bold">{data.location.name}</a>
          </span>
        </div>
        <button
          onClick={() => router.push("/fetching")}
          className="rounded-full border px-2 py-1 mt-2 border-black hover:text-white hover:bg-black transition ease-linear "
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default DetailsPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results } = await res.json();
  return {
    paths: results.map((item) => {
      return {
        params: { id: String(item.id) },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const ids = context.params.id;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
