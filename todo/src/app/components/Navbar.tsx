import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" text-xl flex w-full p-4 gap-2">
      <Link href="/">Home</Link>
      <Link href="/tokenizer">Tokenizer</Link>
      <div className="flex-grow"></div>
      <Link href="/login" className="hover:underline">
        Login
      </Link>
    </nav>
  );
}
