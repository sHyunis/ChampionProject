"use server";
import ItemCard from "@/components/ItemCard";
import { Item } from "@/types/Item";
import { fetchItem } from "@/utils/serverApi";
import React, { Suspense } from "react";
import Loading from "../loading";
import { CustomError } from "@/types/Error";
import ErrorComponent from "../error";

const ItemPage = async () => {
  const items: Item[] | CustomError = await fetchItem();

  if ("message" in items) {
    return <ErrorComponent error={items} />;
  }
  return (
    <div className="font-korean w-[70%] mx-auto">
      <h1 className="text-center mt-12 text-3xl font-extrabold">아이템 목록</h1>
      <div className="w-full grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7  mt-12 gap-12 mx-auto">
        <Suspense fallback={<Loading type={"page3"} />}>
          {items?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default ItemPage;
