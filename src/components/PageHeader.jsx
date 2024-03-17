"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Profile from "@/components/UserDropdown/Profile";
import LogoAndName from "./LogoAndName";
import { SlSettings } from "react-icons/sl";
import Settings from "./Settings/Settings";

const PageHeader = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <header className="flex relative z-50 sm:px-0 px-2 container mx-auto lg:pb-2 lg:pt-0 py-6 items-center justify-between w-full drop-shadow-sm">
      <h3 className="text-[22px] font-medium lg:block hidden">Duas Page</h3>
      <div className="lg:hidden">
        <LogoAndName />
      </div>
      <div className="lg:w-[40%] flex items-center justify-between gap-7">
        <form action="#">
          <div className="relative lg:bg-white bg-slate-100 rounded-md">
            <input
              className="p-3 px-4 rounded-md placeholder:text-sm bg-transparent focus:outline-none w-full max-w-[371px] lg:min-w-[300px] focus:outline-1 focus:outline-[#1FA45B]"
              type="search"
              placeholder="Search by Dua Name"
              name="search"
              id="search"
            />

            <span className="absolute right-1 top-1/2 -translate-y-1/2 w-14 h-10 lg:bg-gray-200 bg-white flex justify-center items-center rounded-md">
              <IoIosSearch className=" text-slate-500 drop-shadow-2xl rounded-md text-xl" />
            </span>
          </div>
        </form>

        <div className="flex items-center gap-2 sm:gap-4">
          <Profile />
          <SlSettings
            onClick={() => setShowSettings(!showSettings)}
            className="text-xl lg:hidden hover:text-[#1FA45B]"
          />
        </div>
      </div>
      <div
        className={` fixed top-24 ${
          showSettings ? "right-0" : "-right-[400px]"
        } transition-all duration-500 z-[10000]`}>
        <Settings />
      </div>
    </header>
  );
};

export default PageHeader;
