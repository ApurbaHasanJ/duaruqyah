import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SubCategories from "./SubCategories";

const Categories = ({ params, searchParams }) => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  //   console.log(searchParams.cat);

  useEffect(() => {
    console.log("useEffect running");
    fetch(`http://localhost:3001/categories`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (category && category.cat_name_en) {
      // Check if category data is available
      const newCatName = category.cat_name_en
        .toLowerCase()
        .replace(/\s+/g, "-");
      const newCatId = category.cat_id;
      router.push(`/duas/${newCatName}?cat=${newCatId}`);
    }
  };
  return (
    <div className="bg-white max-w-[350px] lg:min-w-[350px] w-full rounded-[10px] shadow">
      <div className="bg-primary rounded-t-[10px] text-[17px] text-center ">
        <h3 className=" font-semibold py-1">Categories</h3>
      </div>
      <div className="px-3 pb-8">
        {/* search field */}
        <form action="#" className="my-3 shadow rounded-lg">
          <div className="relative bg-none">
            <input
              className="p-3 pl-11 rounded-md placeholder:text-sm w-full focus:outline-[#1FA45B]"
              type="search"
              placeholder="Search by Dua Name"
              name="search"
              id="search"
            />

            <span className="absolute left-1 top-1/2 -translate-y-1/2 w-11 h-8 flex justify-center items-center rounded-md">
              <IoIosSearch className=" text-slate-500 drop-shadow-2xl rounded-md text-xl" />
            </span>
          </div>
        </form>

        {/* all categories */}
        <div
          className="grid grid-cols-1 gap-1 max-h-[calc(100dvh-270px)] overflow-y-scroll"
          style={{ scrollbarWidth: "thin" }}>
          {categories.map((category, index) => (
            <div key={category?.id}>
              <div
                onClick={() => handleCategoryClick(category)}
                className="flex items-center justify-between p-2 rounded-[10px] hover:bg-[#E8F0F5] transition-colors duration-500">
                <div className="flex items-center gap-3">
                  <Image
                    className="rounded-lg"
                    src="/dua-icon.png"
                    width={60}
                    height={60}
                    alt="category icon"
                  />
                  <div className="flex flex-col items-start">
                    <h4
                      className={`${
                        searchParams.cat == category?.cat_id
                          ? "text-primary"
                          : ""
                      } font-semibold text-base `}>
                      {category?.cat_name_en}
                    </h4>
                    <span className="text-secondary text-sm">
                      Subcategory:{category?.no_of_subcat}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-semibold">{category?.no_of_dua}</span>
                  <span className="text-secondary">Duas</span>
                </div>
              </div>
              {category.cat_id == searchParams.cat && (
                <SubCategories searchParams={searchParams} params={params} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
