import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto mt-12 text-center">
      <Link href={"/champions"} className="w-[100%] h-[30px]">
        <div>챔피언목록</div>
      </Link>
      <Link href={"/items"}>
        <div>아이템목록</div>
      </Link>
      <Link href={"/rotation"}>
        <div>챔피언 로테이션</div>
      </Link>
    </div>
  );
}
