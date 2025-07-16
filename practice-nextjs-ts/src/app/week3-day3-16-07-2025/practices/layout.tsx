import Link from "next/dist/client/link";

export default function PracticesWeek3Day3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 mb-8">
        <div className=" mx-auto px-4 py-4 flex flex-wrap gap-4 justify-center">
          <Link
            href="/week3-day3-16-07-2025/practices/thegioididong"
            className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Thegioididong
          </Link>
          <Link
            href="/week3-day3-16-07-2025/practices/task-management/login"
            className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            Task Management
          </Link>
        </div>
      </nav>
      <main className="">{children}</main>
    </section>
  );
}
