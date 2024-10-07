import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <nav>
        <ul className="grid grid-cols-4 w-full bg-slate-800 h-10">
          <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
            <Link
              href="/"
              className="w-full h-full flex justify-center items-center font-bold"
            >
              홈
            </Link>
          </li>
          <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
            <Link
              href="/champions"
              className="w-full h-full flex justify-center items-center font-bold"
            >
              챔피언 목록
            </Link>
          </li>
          <li className="flex justify-center items-center border border-solid border-gray-500 border-r-0 hover:bg-gray-200 hover:text-black ">
            <Link
              href="/items"
              className="w-full h-full flex justify-center items-center font-bold"
            >
              아이템 목록
            </Link>
          </li>
          <li className="flex justify-center items-center border border-solid border-gray-500 hover:bg-gray-200 hover:text-black ">
            <Link
              href="/rotation"
              className="w-full h-full flex justify-center items-center font-bold"
            >
              챔피언 로테이션
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
