"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnimate = async (page: number) => {
  var response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  var data = await response.json();
  //   console.log(data);
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
