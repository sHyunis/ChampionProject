import { Item } from "@/types/Item";
import Image from "next/image";

const BASEURL = "https://ddragon.leagueoflegends.com/cdn";

type ItemCardProps = {
  item: Item;
};

const ItemCard = async ({ item }: ItemCardProps) => {
  return (
    <div className="border border-solid border-white p-4 mx-auto mb-4 text-center">
      <Image
        src={`${BASEURL}/14.19.1/img/item/${item.image.full}`}
        alt={item.name}
        width={200}
        height={200}
        className="mb-4"
      />
      <p className=" border border-solid border-l-0 border-r-0 border-b-0 ">
        <span className="font-bold text-red-400 mb-4 text-xs">{item.name}</span>
        <br />
        <span>{item.title}</span>
      </p>
    </div>
  );
};

export default ItemCard;
