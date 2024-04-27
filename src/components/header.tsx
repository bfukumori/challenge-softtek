import Link from 'next/link';

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-4 sm:px-8">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/">Início</Link>
          <Link href="/orders?status=all&page=1">Pedidos</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">TOGGLE</div>
      </div>
    </div>
  );
}
