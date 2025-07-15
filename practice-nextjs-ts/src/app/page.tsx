import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <main className="w-full max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Exercises</h1>
          <p className="text-gray-600">Select a week to view exercises:</p>
          <Link
            href="/week3-day2-15-07-2025"
            className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Week3 Day2 15/07/2025
          </Link>
        </div>
      </main>
    </div>
  );
}
