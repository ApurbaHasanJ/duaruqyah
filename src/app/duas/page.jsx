"use client"
import Categories from "@/components/Categories/Categories";
import Settings from "@/components/Settings/Settings";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

const Duas = () => {
  const pathname = usePathname()
  const router = useRouter()
  console.log(pathname);

  useEffect(() => {
    if (pathname === "/duas") {
      router.push(`/duas/dua's-importance?cat=1`);
    }
  }, [router, pathname]);

  return (
    <main className="h-screen flex justify-center items-center">
      {/* <Link
        href={`/duas/${catName}?cat=${catId}`}
        className="bg-primary">
        <button className="flex gap-3 items-center">
          <span>Go To Dua&apos;s Page</span>
          <FaChevronRight className="animate-pulse" />
        </button>
      </Link> */}
    </main>
  );
};

export default Duas;
