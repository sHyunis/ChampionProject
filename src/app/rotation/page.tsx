"use client";

import ChampionCard from "@/components/ChampionCard";
import { Champion, ChampionListResponse } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CustomError } from "@/types/Error";
import ErrorComponent from "../error";

const fetchRotationData = async (): Promise<Champion[]> => {
  // 이번 주 로테이션 데이터
  const res = await getChampionRotation();
  const rotationIds = res.freeChampionIds || [];

  // 전체 데이터
  const championListRes: ChampionListResponse | CustomError =
    await fetchChampionList();

  // CustomError 처리
  if ("message" in championListRes) {
    throw new Error("championList에러입니다");
  }

  // 로테이션 id와 전체 데이터의 key 비교하여 매칭되는 데이터 추출
  return Object.keys(championListRes)
    .filter((championKey) =>
      rotationIds.includes(parseInt(championListRes[championKey].key))
    )
    .map((key) => championListRes[key]);
};

const RotationPage = () => {
  const {
    data: rotationData,
    isLoading,
    error,
  } = useQuery<Champion[], Error>({
    queryKey: ["champitonRotation"],
    queryFn: fetchRotationData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div>
      <h1 className="font-extrabold text-3xl text-center mt-12 text-red-400">
        이번주 로테이션 챔피언
      </h1>
      <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto mt-12 gap-4">
        {rotationData?.map((champion) => (
          <ChampionCard key={champion.key} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
