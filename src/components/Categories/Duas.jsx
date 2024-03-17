import useGetDua from "@/hooks/useGetDua";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Duas = ({ params, searchParams }) => {
  const { duas } = useGetDua();

  const router = useRouter();

  const filteredDuas = duas.filter((dua) => dua.cat_id == searchParams.subcat);
  // console.log({ filteredDuas });

  const handleDuaClick = (duaId) => {
    if (duaId) {
      // Check if category data is available
      const newCatName = params.id.toLowerCase().replace(/%26/g, "&");
      const newCatId = searchParams.cat;
      const newSubCatId = searchParams.subcat;
      router.push(
        `/duas/${newCatName}?cat=${newCatId}&subcat=${newSubCatId}&dua=${duaId}`
      );
    }
  };

  // Scroll to the dua element with the corresponding id
  const duaElement = document.getElementById("active-dua" + searchParams.dua);
  if (duaElement) {
    duaElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul className="ml-3 grid grid-cols-1 gap-5 mt-5">
      {filteredDuas.map((dua, index) => (
        <li
          key={index}
          id={"active-dua" + dua?.dua_id}
          className="flex gap-[3px] items-baseline"
          onClick={() => handleDuaClick(dua?.dua_id)}>
          <Image width={15} height={15} src="/duaarrow.svg" alt="dua.svg" />
          <span
            className={`${
              searchParams.dua == dua?.dua_id
                ? "text-primary"
                : "text-[#373737]"
            } text-sm pl-2`}>
            {dua?.dua_name_en}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Duas;
