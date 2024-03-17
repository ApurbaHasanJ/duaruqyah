import Image from "next/image";
import React from "react";
import { RxDashboard } from "react-icons/rx";

const Settings = () => {
  return (
    <aside className="bg-white z-50 py-7 px-3 h-full w-[260px]  lg:rounded-[32px] lg:border-none border  rounded-b-lg">
      <h3 className="text-xl font-bold text-center">Settings</h3>
      <div className="grid grid-cols-1 gap-4 mt-5">
        <div className="bg-[#F7F8FA] flex items-center gap-4 py-2 px-3 rounded-md">
          <Image
            className="nav-item"
            src="/language.png"
            width={24}
            height={24}
            alt=""
          />
          <p className="text-secondary">Language Settings</p>
        </div>
        <div className="bg-[#F7F8FA] flex items-center gap-4 py-2 px-3 rounded-md">
          <Image
            className="nav-item"
            src="/general.png"
            width={24}
            height={24}
            alt=""
          />
          <p className="text-secondary">General Settings</p>
        </div>
        <div className="bg-[#F7F8FA] flex items-center gap-4 py-2 px-3 rounded-md">
          <div className="nav-item">
            <RxDashboard className=" text-2xl text-secondary" />
          </div>
          <p className="text-secondary">Font Settings</p>
        </div>
        <div className="shadow-sm border-b border-x border-gray-200 rounded-md">
          <div className="bg-[#F7F8FA] border-l-[5px] border-[#1FA45B] font-semibold flex items-center gap-4 py-2 px-3 rounded-md">
            <div className="nav-item">
              <RxDashboard className=" text-2xl text-primary" />
            </div>
            <p className="text-primary">Appearance Settings</p>
          </div>

          <div className="px-2 rounded-b-md py-5 flex items-center justify-around">
            <span className=" text-[#393939]">Night Mode</span>
            <div className=" relative bg-[#C1C1C1] rounded-full w-[28px] h-3">
              <div className=" absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 bg-[#A4A4A4] rounded-full"></div>
              {/* <div className=""></div> */}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Settings;
