import Image from "next/image";
import React from "react";

const LogoAndName = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        className="rounded-xl shadow-md shadow-green-100"
        width={48}
        height={48}
        src="/logo.png"
        alt="Dua's logo"
      />
      <span className="hidden text-xl font-medium">Dua & Ruqyah</span>
    </div>
  );
};

export default LogoAndName;
