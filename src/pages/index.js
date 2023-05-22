import ImageCarousel from "@/components/carousel";
import Category from "@/components/categories";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-10">
      <div className="overflow-x-hidden">
      <ImageCarousel />
      </div>
      <Category />
    </main>
  );
}