import React from "react";
import { IoIosSearch } from "react-icons/io";
import Profile from "@/components/UserDropdown/Profile";

const PageHeader = () => {
  return (
    <header className="flex items-center justify-between w-full drop-shadow-sm">
      <h3 className="text-[22px] font-medium">Duas Page</h3>
      <div className="lg:w-[40%] flex items-center justify-between gap-7">
      <form action="#" >
        <div className="relative bg-white rounded-md">
          <input
            className="p-3 px-4 rounded-md placeholder:text-sm focus:outline-none w-full max-w-[371px] min-w-[300px] focus:outline-1 focus:outline-[#1FA45B]"
            type="search"
            placeholder="Search by Dua Name"
            name="search"
            id="search"
          />

          <span className="absolute right-1 top-1/2 -translate-y-1/2 w-14 h-10 bg-gray-200 flex justify-center items-center rounded-md">
            <IoIosSearch className=" text-slate-500 drop-shadow-2xl rounded-md text-xl" />
          </span>
        </div>
      </form>
      <Profile/>
      </div>
    </header>
  );
};

export default PageHeader;
