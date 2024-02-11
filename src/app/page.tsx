import { Account } from "@/components/account";
import { WalletOptions } from "@/components/wallet-options";
import { useAccount } from "wagmi";

export default function Home() {
  return (
    <main>
      <Account />
      <WalletOptions />{" "}
    </main>
  );
}
