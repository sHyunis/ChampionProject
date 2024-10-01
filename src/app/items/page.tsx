"use server";
import ItemCard from "@/components/ItemCard";
import { Item } from "@/types/Item";
import { fetchItem } from "@/utils/serverApi";
import React from "react";

const ItemPage = async () => {
  const items: Item[] = await fetchItem();
  return (
    <div>
      <h1 className="text-center mt-12 text-3xl font-extrabold">아이템 목록</h1>
      <div className="w-[80%] grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 mx-auto mt-12 gap-4">
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
