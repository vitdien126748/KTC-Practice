import Link from "next/dist/client/link";

export default function TaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 mb-8">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap gap-4 justify-center">
          <Link
            href="/week3-day2-15-07-2025/practices/task-ssr"
            className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Task - SSR
          </Link>
          <Link
            href="/week3-day2-15-07-2025/practices/task-ssg"
            className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Task - SSG
          </Link>
          <Link
            href="/week3-day2-15-07-2025/practices/task-isr"
            className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Task - ISR
          </Link>
          <Link
            href="/week3-day2-15-07-2025/practices/task-csr"
            className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Task - CSR
          </Link>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-4">{children}</main>
    </section>
  );
}
