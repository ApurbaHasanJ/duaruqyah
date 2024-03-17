import useGetDua from "@/hooks/useGetDua";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReport } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { useState } from "react";
import useGetSubCategories from "@/hooks/useGetSubCategories";

const Contents = ({ params, searchParams }) => {
  const { duas, isLoading, error } = useGetDua();
  const { subCategories } = useGetSubCategories();
  const [audioUrl, setAudioUrl] = useState(null);

  const filteredDuas = duas.filter((dua) => dua?.cat_id == searchParams.cat);

  console.log(filteredDuas);
  //   console.log({ params, searchParams });

  return (
    <section
      className=" grid grid-cols-1 gap-4 overflow-y-scroll max-h-[calc(100dvh-170px)] pb-10"
      style={{ scrollbarWidth: "thin" }}>
      <div className=" w-full">
        <h4 className="lg:font-semibold bg-white text-desc w-full shadow p-5 rounded-lg">
          <span className="text-primary ">Section:</span> Dua while hearing the
          adhaan
        </h4>
      </div>
      {filteredDuas.map((dua) => (
        <div key={dua?.id} className="bg-white shadow rounded-xl p-6">
          <div className="text-primary flex gap-2 items-center">
            <Image width={35} height={35} src="/allah.png" alt="Allah" />
            <h4 className="font-semibold text-[18px]">{dua?.dua_name_en}</h4>
          </div>

          {/* main description */}
          <p className="mt-6 text-lg">{dua?.top_en}</p>

          {/* arabic sentence */}
          <p
            className={`my-8 text-[34px] leading-relaxed text-right ${
              dua?.dua_arabic === null && "hidden"
            }`}>
            {dua?.dua_arabic}
          </p>

          {/* Transliteration */}
          <i
            className={`mt-6 text-lg ${
              dua?.transliteration_en === null && "hidden"
            }`}>
            <span className="font-medium">Transliteration:</span>{" "}
            {dua?.transliteration_en}
          </i>

          {/* Translation */}
          <p
            className={`mt-6 text-lg text-desc ${
              dua?.translation_en === null && "hidden"
            }`}>
            <span className="font-medium">Translation:</span>{" "}
            {dua?.translation_en}
          </p>

          {/* bottom_en */}
          <p className="mt-6 text-lg">{dua?.bottom_en}</p>

          {/* reference */}
          <div className="mt-8 text-[18px]">
            <span className="text-primary font-semibold">Reference:</span>
            <br />
            <span className="font-medium">{dua?.refference_en}</span>
          </div>

          {/* user tools */}
          <div className="mt-10 text-2xl flex items-center gap-2 justify-between">
            <div
              className={`flex items-center gap-3 ${
                dua?.audio === null && "hidden"
              }`}>
              <FaCirclePlay
                onClick={() => setAudioUrl(dua?.audio)}
                className={`text-5xl text-primary ${
                  dua?.audio === null && "hidden"
                }`}
              />
              <audio
                className={dua?.audio === audioUrl ? "block" : "hidden"}
                controls
                loop
                src={dua?.audio}></audio>
            </div>

            <div className="flex ml-auto items-center gap-6 text-gray-500 hover:text-[#1FA45B]">
              <IoCopyOutline />
              <CiBookmark />
              <IoBulbOutline />
              <IoShareSocialOutline />
              <MdOutlineReport />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Contents;
