import Link from "next/dist/client/link";

export default function Week3Day3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 mb-8">
        <div className=" mx-auto px-4 py-4 flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-600 px-8 py-2 rounded-md text-lg font-medium"
          >
            Home
          </Link>
          <Link
            href="/week3-day3-16-07-2025/practices"
            className="text-gray-700 hover:text-indigo-600 px-8 py-2 rounded-md text-lg font-medium"
          >
            Practices
          </Link>
          <Link
            href="/week3-day3-16-07-2025/homework"
            className="text-gray-700 hover:text-indigo-600 px-8 py-2 rounded-md text-lg font-medium"
          >
            Homework
          </Link>
        </div>
      </nav>
      <main className="">{children}</main>
    </section>
  );
}
