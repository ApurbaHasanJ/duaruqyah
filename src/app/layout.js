import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Duaruqyah",
  description:
    "Islam: Faith of peace, compassion, justice, and spiritual enlightenment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${inter.className} fixed left-0 right-0 bg-slate-100 px-10 py-6 flex gap-6`}>
        <Navbar />
        <div className="w-full">
          <PageHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
