"use client";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { WalletOptions } from "./wallet-options";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  //   const { data: ensName } = useEnsName({ address });
  //   const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div>
      {address ? (
        <button onClick={() => disconnect()}>Disconnect</button>
      ) : (
        <WalletOptions />
      )}
    </div>
  );
}
