import { sidebar } from "@/db";
import Link from "next/link";
import { Button } from "./ui/button";

function LeftSidebar() {
  return (
    <div className="border-l">
      <div>
        <Link href={"/"}>Logo</Link>
      </div>
      <ul className="grid gap-2">
        {sidebar.nav.map((item) => {
          return (
            <li key={item.name} className="flex gap-1">
              <span>{<item.icon />}</span> <span>{item.name}</span>
            </li>
          );
        })}
        <li>
          <Button>Post</Button>
        </li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
