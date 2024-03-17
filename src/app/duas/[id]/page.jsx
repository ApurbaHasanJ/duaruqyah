"use client";
import Categories from "@/components/Categories/Categories";
import Contents from "@/components/Categories/Contents";
import Settings from "@/components/Settings/Settings";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";

const Dua = ({ params, searchParams }) => {
  const [showCategories, setShowCategories]=useState(false)
  return (
    <section className={`w-full mt-4 flex gap-6`}>
      <div className={`lg:static fixed top-24 ${showCategories ? 'left-0': "-left-[400px]"} transition-all duration-500`}>
        <Categories searchParams={searchParams} params={params} setShowCategories={setShowCategories}/>
      </div>
      <div >
        <h4 className="lg:font-semibold lg:hidden flex gap-3 items-center mb-3 bg-white text-desc w-full shadow p-5 rounded-lg">
          <HiBars3 className="text-2xl hover:text-[#1FA45B]" onClick={()=>setShowCategories(true)}/>
          Dua&apos;s importance
        </h4>
        <Contents searchParams={searchParams} params={params} />
      </div>
      <div className="lg:block hidden">
        <Settings />
      </div>
    </section>
  );
};

export default Dua;
