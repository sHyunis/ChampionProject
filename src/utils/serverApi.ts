import { Champion, ChampionListResponse } from "@/types/Champion";
import { ChampionDetail } from "@/types/ChampionDetail";
import { Item } from "@/types/Item";

const BASEURL = "https://ddragon.leagueoflegends.com";

// 최신버전
export async function fetchVersion(): Promise<string> {
  try {
    const fetchVersion = await fetch(`${BASEURL}/api/versions.json`);
    const versionRes = await fetchVersion.json();
    return versionRes[0]; // 최신 버전 반환
  } catch (error) {
    console.log(error, "버전가져오기오류");
    return "";
  }
}

// 챔피언전체정보
export async function fetchChampionList(): Promise<ChampionListResponse> {
  const version = await fetchVersion();
  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/champion.json`
    );
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error, "ChampionList Error");
    return {};
  }
}

// 챔피언 상세 정보
export async function fetchChampionDetail(
  id: string
): Promise<ChampionDetail | null> {
  const version = await fetchVersion();
  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/champion/${id}.json`
    );
    const data = await res.json();

    return data.data[id];
  } catch (error) {
    console.log(error, "championDetail Error");
    return null;
  }
}

// 아이템정보
export async function fetchItem(): Promise<Item[]> {
  const version = await fetchVersion();
  try {
    const res = await fetch(
      `${BASEURL}/cdn/${version}/data/ko_KR/item.json` // 아이템 API 엔드포인트 수정
    );
    const data = await res.json();
    console.log(data.data);
    return Object.values(data.data);
  } catch (error) {
    console.log(error, "ItemFetch Error");
    return [];
  }
}
