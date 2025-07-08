type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; ++i) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-6 gap-2">
      {getPages().map((page) => (
        <button
          key={page}
          className={`w-9 h-9 rounded border text-base font-semibold ${
            page === currentPage
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white text-gray-800 border-gray-300 hover:bg-orange-100"
          } transition`}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
