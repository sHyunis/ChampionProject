import Link from "next/link";
import Item from "../public/imgs/Item.jpg";
import championList from "../public/imgs/championList.jpg";
import mainImg from "../public/imgs/mainImg.png";
import rotation from "../public/imgs/rotation.jpg";
import Image from "next/image";

const IMAGELIST = [
  {
    href: "/champions",
    src: championList,
    name: "챔피언 리스트",
  },
  {
    href: "/items",
    src: Item,
    name: "아이템",
  },
  {
    href: "/rotation",
    src: rotation,
    name: "무료 캐릭터",
  },
];

export default function Home() {
  return (
    <div className={`w-[70%] mx-auto mt-8 text-center font-korean`}>
      <h1 className="font-english font-extrabold text-8xl mb-8 text-blue-200">
        <span className="text-pink-200">FIND</span> YOUR&nbsp;
        <span className="text-green-200">CHARACTER</span>
      </h1>
      <div className="w-full mb-8 ">
        <Image
          src={mainImg}
          layout="responsive"
          width={1600}
          height={400}
          alt="mainImg"
          className="mb-4 rounded"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {IMAGELIST.map((image) => (
          <Link href={image.href} key={image.name}>
            <div className="flex flex-col items-center">
              <Image
                src={image.src}
                width={400}
                height={400}
                className="mb-4 rounded"
                alt="img"
              />
              <p className="font-bold">{image.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
