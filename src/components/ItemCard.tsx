import { Item } from "@/types/Item";
import Image from "next/image";
import styles from "../app/styles/itemCard.module.css"; // CSS 모듈 임포트

const BASEURL = "https://ddragon.leagueoflegends.com/cdn";

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={`${BASEURL}/14.19.1/img/item/${item.image.full}`}
        alt={item.name}
        width={90}
        height={90}
        className={styles.image}
      />
      <div className="text-sm text-center">{item.name}</div>
      <div className={styles.text}>
        <p className="text-sm text-center mt-2 mb-2">
          BASE : {item.gold.base} <br />
          TOTAL : {item.gold.total}
          <br />
          SELL : {item.gold.sell}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
