"use server";

import { ChampionDetail } from "@/types/ChampionDetail";
import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

interface Params {
  params: {
    id: string;
  };
}

export default async function ChampionDetailPage({ params }: Params) {
  const data: ChampionDetail | null = await fetchChampionDetail(params.id);

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }
  return (
    <div className="w-[80%] mx-auto">
      <div className="w-[500px] mt-8 p-8 mx-auto border border-solid">
        <h1 className="font-extrabold text-4xl text-center  text-red-400">
          {data.name}
        </h1>
        <h2 className="text-2xl text-center mt-4 font-bold">{data.title}</h2>
        <div className="flex flex-col items-center mt-8">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${data.image.full}`}
            alt={data.name}
            width={100}
            height={100}
            className="w-[200px]"
          />
          <p className="mt-8 w-[400px] text-gray-300">{data.blurb}</p>
        </div>
      </div>
      <h2 className="font-extrabold text-2xl mt-8 text-red-300 text-center">
        {data.name}의 스킬
      </h2>
      <div className="mt-8  w-[500px] mx-auto grid grid-cols-4 mb-12 gap-4 text-center">
        {data.spells.map((spell) => (
          <div key={spell.id} className="border border-solid border-white p-4 ">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`}
              alt={`${spell.id}`}
              width={100}
              height={100}
              className="border border-solid border-white border-r-0 border-l-0 border-t-0 mt-4 pb-4"
            />
            <p className="mt-2 font-bold">{spell.name}</p>
            <p className="text-sm h-[80px] overflow-auto text-left mt-2">
              {spell.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// 메타데이터 설정
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const champion: ChampionDetail | null = await fetchChampionDetail(params.id);

  if (!champion) {
    return {
      title: "정보없음",
      description: "정보없음",
      keywords: "League of Legends",
    };
  }
  return {
    title: champion.name,
    description: `Learn more about ${champion.name}, the ${champion.title} in League of Legends.`,
    keywords: `League of Legends, ${champion.name}, ${champion.title}`,
  };
}
