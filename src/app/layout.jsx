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
      <body className={inter.className}>
       {children}
      </body>
    </html>
  );
}
