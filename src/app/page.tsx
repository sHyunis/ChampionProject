import Link from "next/link";
import localFont from "next/font/local";
import Item from "../public/imgs/Item.jpg";
import championList from "../public/imgs/championList.jpg";
import mainImg from "../public/imgs/mainImg.png";
import rotation from "../public/imgs/rotation.jpg";
import Image from "next/image";

const pretendard = localFont({
  src: "../public/fonts/FreesentationVF.ttf",
  weight: "400",
  variable: "--font-pretendard",
});

export default function Home() {
  return (
    <div className={`w-[70%] mx-auto mt-8 text-center ${pretendard.variable}`}>
      <h1 className="font-logo font-extrabold text-4xl mb-8 text-blue-200">
        <span className="text-pink-200">FIND</span> YOUR
        <span className="text-green-200">CHARACTER</span>
      </h1>
      <div className="w-full mb-8 ">
        <Image
          src={mainImg}
          layout="responsive"
          width={1600}
          height={400}
          alt="mainImg"
          className="mb-4"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        <Link href={"/champions"}>
          <div className="flex flex-col items-center">
            <Image
              src={championList}
              width={400}
              height={400}
              className="mb-4"
              alt="img"
            />
            <p className="font-bold">챔피언목록</p>
          </div>
        </Link>
        <Link href={"/items"}>
          <div className="flex flex-col items-center">
            <Image
              src={Item}
              width={400}
              height={400}
              className="mb-4"
              alt="img"
            />
            <p className="font-bold">아이템목록</p>
          </div>
        </Link>
        <Link href={"/rotation"}>
          <div className="flex flex-col items-center">
            <Image
              src={rotation}
              width={400}
              height={400}
              className="mb-4"
              alt="img"
            />
            <p className="font-bold">챔피언 로테이션</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
