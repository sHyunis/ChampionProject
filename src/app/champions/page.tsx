"use server";

import ChampionCard from "@/components/ChampionCard";
import { Champion, ChampionListResponse } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";

export default async function ChampionPage() {
  const data: ChampionListResponse = await fetchChampionList();

  return (
    <>
      <h1 className="font-extrabold text-3xl text-center mt-12">챔피언목록</h1>
      <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto mt-12 gap-4">
        {Object.values(data).map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </>
  );
}

// 메타데이터 설정을 위한 function을 추가
export async function generateMetadata() {
  return {
    revalidate: 86400,
  };
}
