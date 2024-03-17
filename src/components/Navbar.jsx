import React from "react";
import Image from "next/image";
import { FaHandHoldingHeart } from "react-icons/fa6";
import LogoAndName from "@/components/LogoAndName";


const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between h-[calc(100dvh-48px)] px-5 py-6 bg-white rounded-3xl shadow">
      <LogoAndName/>
      <ul className="flex flex-col gap-5">
        <li className="nav-item">
          <Image width={25} height={25} src="/home.png" alt="home" />
        </li>
        <li className="nav-item">
          <Image width={25} height={25} src="/dashboard.png" alt="dashboard" />
        </li>
        <li className="nav-item">
          <Image width={25} height={25} src="/memorize.png" alt="memorize" />
        </li>
        <li className="nav-item">
          <Image width={25} height={25} src="/bookmark.png" alt="bookmark" />
        </li>
        <li className="nav-item">
          <Image width={25} height={25} src="/ruqyah.png" alt="ruqyah" />
        </li>
        <li className="nav-item">
          <Image width={25} height={25} src="/dua-info.png" alt="dua-info" />
        </li>
      </ul>
      <FaHandHoldingHeart className="bg-primary text-5xl text-white rounded-xl shadow-xl shadow-green-100"/>
    </nav>
  );
};

export default Navbar;
