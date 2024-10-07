import { ChampionRotation } from "@/types/ChampionRotation";
import { CustomError } from "@/types/Error";

export async function getChampionRotation(): Promise<
  ChampionRotation | CustomError
> {
  try {
    const res = await fetch("/api/rotation");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return { message: "로테이션 정보를 가져오는데 실패했습니다." };
  }
}
