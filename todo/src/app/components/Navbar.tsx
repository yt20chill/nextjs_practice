import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" text-xl absolute flex w-full p-4">
      <Link href="/">Home</Link>
      <div className="flex-grow"></div>
      <Link href="/login" className="hover:underline">
        Login
      </Link>
    </nav>
  );
}
