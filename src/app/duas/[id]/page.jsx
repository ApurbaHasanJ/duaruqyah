"use client";
import Categories from "@/components/Categories/Categories";
import Contents from "@/components/Categories/Contents";
import Settings from "@/components/Settings/Settings";

const Dua = ({ params, searchParams }) => {
  return (
    <section className="w-full mt-4 flex gap-6">
      <Categories searchParams={searchParams} params={params} />
      <Contents searchParams={searchParams} params={params} />
      <Settings />
    </section>
  );
};

export default Dua;
