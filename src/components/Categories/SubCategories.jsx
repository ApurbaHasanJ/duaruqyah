import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Duas from "./Duas";
import useGetSubCategories from "@/hooks/useGetSubCategories";

const SubCategories = ({ params, searchParams }) => {
  const { subCategories } = useGetSubCategories();
  const router = useRouter();

  //   filter out selected sub-categories
  const filteredCategories = subCategories.filter(
    (category) => category.cat_id == searchParams.cat
  );
  //   // console.log({ filteredCategories });

  // update url
  const handleSubCategoryClick = (subCatId) => {
    // console.log(subCatId);
    if (subCatId) {
      // Check if category data is available
      const newCatName = params.id.toLowerCase().replace(/%26/g, "&");
      const newCatId = searchParams.cat;
      router.push(`/duas/${newCatName}?cat=${newCatId}&subcat=${subCatId}`);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 ml-6 border-l-2 border-dashed border-[#1FA45B] ">
      {filteredCategories.map((category) => (
        <ul key={category.id}>
          <li
            className="flex items-baseline"
            onClick={() => handleSubCategoryClick(category?.subcat_id)}>
            <span className="text-[17px] text-primary -ml-[5px]">•</span>
            <div
              className={` ${
                searchParams.subcat == category?.subcat_id
                  ? "text-primary"
                  : "text-[#373737]"
              } text-sm font-semibold pl-2`}>
              {category?.subcat_name_en}
            </div>
          </li>
          {category.subcat_id == searchParams.subcat && (
            <Duas searchParams={searchParams} params={params} />
          )}
        </ul>
      ))}
    </div>
  );
};

export default SubCategories;
