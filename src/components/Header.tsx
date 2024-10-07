import Link from "next/link";

const NAVMENU = [
  {
    href: "/",
    menu: "HOME",
  },
  {
    href: "champions",
    menu: "챔피언 리스트",
  },
  {
    href: "/items",
    menu: "아이템 목록",
  },
  { href: "/rotation", menu: "무료 캐릭터" },
];
export default function Header() {
  return (
    <header className="w-full font-korean">
      <nav>
        <ul className="grid grid-cols-4 w-full bg-slate-800 h-10 font-extrabold">
          {NAVMENU.map((nav) => (
            <li className="flex font-extrabold justify-center items-center duration-500 hover:bg-gray-200 hover:text-black ">
              <Link
                href={nav.href}
                className="w-full h-full flex justify-center items-center font-bold"
              >
                {nav.menu}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
