"use client";
import Categories from "@/components/Categories/Categories";
import Contents from "@/components/Categories/Contents";
import Settings from "@/components/Settings/Settings";

const Dua = ({ params, searchParams }) => {
  return (
    <section className="w-full mt-4 flex gap-6">
      <div className="lg:block hidden">
      <Categories searchParams={searchParams} params={params} />
      </div>
      <div>
        
      <Contents searchParams={searchParams} params={params} />
      </div>
      <div className="lg:block hidden">
      <Settings />
      </div>
    </section>
  );
};

export default Dua;
