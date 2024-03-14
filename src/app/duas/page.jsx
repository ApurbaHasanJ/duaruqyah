import Settings from "@/components/Settings/Settings";
import Image from "next/image";
import React from "react";
import { IoIosSearch } from "react-icons/io";

const page = () => {
  return (
    <section className="w-full mt-4 flex gap-7">
      <div className="bg-white max-w-[350px] w-full rounded-[10px]">
        <h3 className="bg-primary font-semibold rounded-t-[10px] text-[17px] text-center">
          Categories
        </h3>
        <div className="px-3 pb-8">
          {/* search field */}
          <form action="#" className="my-3 shadow rounded-lg">
            <div className="relative bg-none">
              <input
                className="p-3 pl-11 rounded-md placeholder:text-[12px] w-full focus:outline-[#1FA45B]"
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
          <div className="grid grid-cols-1 gap-1">
            <div className="flex items-center justify-between p-2 rounded-[10px] hover:bg-[#E8F0F5] transition-colors duration-500">
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-lg"
                  src="/logo.png"
                  width={60}
                  height={60}
                  alt="category icon"
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-primary font-semibold text-base">
                    Dua&apos;s Importance
                  </h4>
                  <span className="text-secondary text-sm">Subcategory:11</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">15</span>
                <span className="text-secondary">Duas</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 rounded-[10px] hover:bg-[#E8F0F5] transition-colors duration-500">
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-lg"
                  src="/logo.png"
                  width={60}
                  height={60}
                  alt="category icon"
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-primary font-semibold text-base">
                    Dua&apos;s Importance
                  </h4>
                  <span className="text-secondary text-sm">Subcategory:11</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">15</span>
                <span className="text-secondary">Duas</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 rounded-[10px] hover:bg-[#E8F0F5] transition-colors duration-500">
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-lg"
                  src="/logo.png"
                  width={60}
                  height={60}
                  alt="category icon"
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-primary font-semibold text-base">
                    Dua&apos;s Importance
                  </h4>
                  <span className="text-secondary text-sm">Subcategory:11</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">15</span>
                <span className="text-secondary">Duas</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 rounded-[10px] hover:bg-[#E8F0F5] transition-colors duration-500">
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-lg"
                  src="/logo.png"
                  width={60}
                  height={60}
                  alt="category icon"
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-primary font-semibold text-base">
                    Dua&apos;s Importance
                  </h4>
                  <span className="text-secondary text-sm">Subcategory:11</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">15</span>
                <span className="text-secondary">Duas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <h4 className="lg:font-semibold bg-white text-desc w-full shadow-md p-5 rounded-lg">
          <span className="text-primary ">Section:</span> Dua while hearing the
          adhaan
        </h4>
      </div>
      <Settings/>
    </section>
  );
};

export default page;
