import { ChampionListResponse } from "@/types/Champion";
import { ChampionDetail } from "@/types/ChampionDetail";
import { CustomError } from "@/types/Error";
import { Item } from "@/types/Item";

const BASEURL = "https://ddragon.leagueoflegends.com";

// 최신버전
export async function fetchVersion(): Promise<string | CustomError> {
  try {
    const fetchVersion = await fetch(`${BASEURL}/api/versions.json`);
    const versionRes = await fetchVersion.json();
    return versionRes[0]; // 최신 버전 반환
  } catch (error) {
    console.log(error, "Version Error");
    return {
      message: "최신 버전을 가져오는데 실패했습니다.",
    };
  }
}

// 챔피언전체정보
export async function fetchChampionList(): Promise<
  ChampionListResponse | CustomError
> {
  const version = await fetchVersion();
  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/champion.json`
    );
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error, "ChampionList Error");
    return {
      message: "챔피언리스트를 가져오는데 실패했습니다.",
    };
  }
}

// 챔피언 상세 정보
export async function fetchChampionDetail(
  id: string
): Promise<ChampionDetail | CustomError> {
  const version = await fetchVersion();

  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/champion/${id}.json`
    );
    const data = await res.json();

    return data.data[id];
  } catch (error) {
    console.log(error);
    return {
      message: "상세정보를 불러오는데 실패했습니다.",
    };
  }
}

// 아이템정보
export async function fetchItem(): Promise<Item[] | CustomError> {
  const version = await fetchVersion();

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/item.json` // 아이템 API 엔드포인트 수정
    );
    const data = await res.json();
    console.log(data.data);
    return Object.values(data.data);
  } catch (error) {
    console.log(error);
    return {
      message: "아이템 정보를 불러오는데 실패했습니다.",
    };
  }
}
