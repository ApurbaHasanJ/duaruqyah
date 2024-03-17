import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SubCategories from "./SubCategories";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Categories = ({ params, searchParams, setShowCategories }) => {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3001/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    if (category && category.cat_name_en) {
      const newCatName = category.cat_name_en
        .toLowerCase()
        .replace(/\s+/g, "-");
      const newCatId = category.cat_id;
      router.push(`/duas/${newCatName}?cat=${newCatId}`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Perform search logic here if needed
  };

  const filteredCategories = categories.filter((category) => {
    return (
      query.trim().toLowerCase() === "" ||
      category?.cat_name_en?.toLowerCase().includes(query.trim().toLowerCase())
    );
  });

  if (searchParams.cat) {
    // Scroll to the dua element with the corresponding id
    const categoryElement = document.getElementById("cat" + searchParams.cat);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="bg-white max-w-[350px] lg:min-w-[350px] w-full rounded-[10px] shadow">
      <div className="bg-primary lg:rounded-t-[10px] text-[17px] text-center ">
        <h3 className="font-semibold py-1 flex items-center lg:justify-center justify-between">
          <span>Categories</span>
          <RxCross2
            onClick={() => setShowCategories(false)}
            className="lg:hidden text-white text-2xl"
          />
        </h3>
      </div>
      <div className="px-3 pb-8 relative">
        <form
          action="#"
          className="my-3 shadow rounded-lg"
          onSubmit={handleFormSubmit}>
          <div className="relative bg-none">
            <input
              className="p-3 pl-11 rounded-md placeholder:text-sm w-full focus:outline-[#1FA45B]"
              type="search"
              placeholder="Search by Dua Name"
              name="search"
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="absolute left-1 top-1/2 -translate-y-1/2 w-11 h-8 flex justify-center items-center rounded-md">
              <IoIosSearch className="text-slate-500 drop-shadow-2xl rounded-md text-xl" />
            </span>
          </div>
        </form>

        <div
          className="grid grid-cols-1 gap-1 h-[calc(100dvh-270px)] overflow-y-scroll"
          style={{ scrollbarWidth: "thin" }}>
          {filteredCategories.length === 0 ? (
            <div className="flex items-center justify-center p-2 rounded-[10px] bg-[#E8F0F5] text-gray-500">
              No results found
            </div>
          ) : (
            filteredCategories.map((category, index) => (
              <div key={category?.id} id={"cat" + category?.cat_id}>
                <div
                  onClick={() => handleCategoryClick(category)}
                  className="flex items-center h-auto justify-between p-2 rounded-[10px] hover:bg-[#E8F0F5] transition-colors duration-500">
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
                        } font-semibold text-base`}>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
