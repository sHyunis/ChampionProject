import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

const BASEURL = "https://ddragon.leagueoflegends.com/cdn";

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <div className="p-8 mx-auto mb-4 text-center rounded transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:rotate-y-6">
      <Link href={`/champions/${champion.id}`}>
        <Image
          src={`${BASEURL}/14.19.1/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={200}
          height={200}
          className="mb-4"
        />
        <p className="leading-loose">
          <span className="font-bold text-red-400 mb-4 text-2xl">
            {champion.name}
          </span>
          <br />
          <span>{champion.title}</span>
        </p>
      </Link>
    </div>
  );
};

export default ChampionCard;
