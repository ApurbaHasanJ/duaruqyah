"use client"
import Categories from "@/components/Categories/Categories";
import Settings from "@/components/Settings/Settings";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Duas = () => {
  const router = useRouter();
  console.log(router);

  useEffect(() => {
    if (router.pathname === "/duas") {
      router.push(`/duas/dua's-importance?cat=1`);
    }
  }, [router]);

  return (
    <section className="w-full mt-4 flex gap-7">
      {/* <Categories/>
      <div className=" w-full">
        <h4 className="lg:font-semibold bg-white text-desc w-full shadow-md p-5 rounded-lg">
          <span className="text-primary ">Section:</span> Dua while hearing the
          adhaan
        </h4>
      </div>
      <Settings/> */}
    </section>
  );
};

export default Duas;
