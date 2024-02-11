import Link from "next/link";

const headerNavItems = [
  {
    name: "for you",
    link: "/home/for-you",
  },
  {
    name: "for you",
    link: "/home/for-you",
  },
  {
    name: "for you",
    link: "/home/for-you",
  },
  {
    name: "for you",
    link: "/home/for-you",
  },
];

function HomeHeader() {
  return (
    <header className="h-12 w-full border ">
      <ul className="flex flex-row items-center justify-center">
        {headerNavItems.map((navItem) => (
          <li key={navItem.name}>
            <Link href={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default HomeHeader;
