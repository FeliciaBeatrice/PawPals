import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/sitter" className="hover:text-pastelPinkHover">
          Home
        </Link>
        <Link href="/sitter/conversations" className="hover:text-pastelBlueHover">
          Conversations
        </Link>
        <Link href="/sitter/profile" className="hover:text-pastelPurple">
          Profile
        </Link>
      </nav>
    </header>
  );
}