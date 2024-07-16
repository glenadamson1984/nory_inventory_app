import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="w-full px-8 py-4 bg-white shadow-md">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-2xl font-bold">Weird Salads</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-blue-500 hover:text-blue-700">
              Deliveries
            </Link>
            <Link href="/sales" className="text-blue-500 hover:text-blue-700">
              Sales
            </Link>
            <Link href="/stock" className="text-blue-500 hover:text-blue-700">
              Stock
            </Link>
            <Link href="/reports" className="text-blue-500 hover:text-blue-700">
              Reports
            </Link>
          </nav>
        </div>
      </header>
      <main className="container flex-grow px-4 py-8 mx-auto">{children}</main>
    </div>
  );
}
