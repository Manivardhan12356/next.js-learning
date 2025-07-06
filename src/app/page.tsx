import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/About">
        <span className="text-blue-500 hover:underline">Go to About</span>
      </Link>
    </div>
  );
}
