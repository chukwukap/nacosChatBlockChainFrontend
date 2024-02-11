import Image from "next/image";
import HomeHeader from "./_components/home-header";
import { Account } from "@/components/account";

export default function Home() {
  return (
    <main className="border h-full">
      <div className="w-full border border-red-500">
        <Account />
        <HomeHeader />
      </div>
    </main>
  );
}
