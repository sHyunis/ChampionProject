import { ChampionRotation } from "@/types/ChampionRotation";

export async function getChampionRotation(): Promise<ChampionRotation> {
  const res = await fetch("/api/rotation");
  const data = await res.json();
  console.log(data);
  return data;
}
