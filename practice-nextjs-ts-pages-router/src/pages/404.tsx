import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-9xl font-bold text-indigo-600">404</div>
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or deleted.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => window.history.back()}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 font-medium inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
