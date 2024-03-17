import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DUARUQYAH",
  description:
    "Islam: Faith of peace, compassion, justice, and spiritual enlightenment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} fixed left-0 right-0 bg-slate-100`}>
        <div className="lg:hidden bg-white z-[1000]">
          <PageHeader />
        </div>
        <div className="w-full relative lg:px-10 px-5 lg:py-6 py-2 flex lg:flex-row flex-col-reverse gap-6">
          <div className="lg:block hidden ">
            <Navbar />
          </div>
          <div className="w-full">
            <div className="lg:block hidden">
              <PageHeader />
            </div>
            {children}
          </div>
        </div>
        <div className="lg:hidden sticky bottom-0 left-0 ">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
