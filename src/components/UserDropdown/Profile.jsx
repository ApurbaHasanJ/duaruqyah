import React from "react";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";


const Profile = () => {
  return (
    <div className="flex gap-1 items-center">
      <Image
        className="rounded-full shadow-sm "
        width={45}
        height={45}
        src="/profile.png"
        alt="profile"
      />
      <FaCaretDown className="text-slate-600"/>
      
    </div>
  );
};

export default Profile;
