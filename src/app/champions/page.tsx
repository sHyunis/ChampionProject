"use server";

import ChampionCard from "@/components/ChampionCard";
import { ChampionListResponse } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import { Suspense } from "react";
import Loading from "../loading";
import { CustomError } from "@/types/Error";

export default async function ChampionPage() {
  const data: ChampionListResponse | CustomError = await fetchChampionList();

  return (
    <div className="font-korean">
      <h1 className="font-extrabold text-3xl text-center mt-12">챔피언목록</h1>
      <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto mt-12 gap-4 ">
        <Suspense fallback={<Loading type="page1" />}>
          {Object.values(data).map((champion) => (
            <ChampionCard key={champion.id} champion={champion} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

// 메타데이터 설정
export async function generateMetadata() {
  return {
    revalidate: 86400,
  };
}
