"use client";

import ChampionCard from "@/components/ChampionCard";
import { Champion, ChampionListResponse } from "@/types/Champion";

import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import React, { useEffect, useState } from "react";

const RotationPage = () => {
  const [rotationData, setRotationData] = useState<Champion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchRotationData = async () => {
      try {
        // 이번 주 로테이션 데이터
        const res = await getChampionRotation();
        const rotationIds = res.freeChampionIds || [];

        // 전체 데이터
        const championListRes: ChampionListResponse = await fetchChampionList();

        // 로테이션 id와 전체 데이터의 key 비교하여 매칭되는 데이터 추출
        const matchedChampions = Object.keys(championListRes)
          .filter((championKey) =>
            rotationIds.includes(parseInt(championListRes[championKey].key))
          )
          .map((key) => championListRes[key]);

        setRotationData(matchedChampions); // 필터링된 데이터 저장
      } catch (error: unknown) {
        if (error instanceof Error) setError(error.message);
        else {
          setError("Rotation Error");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRotationData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1 className="font-extrabold text-3xl text-center mt-12 text-red-400">
        이번주 로테이션 챔피언
      </h1>
      <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto mt-12 gap-4">
        {rotationData.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
