export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 flex-wrap">

      {/* Prev */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 sm:px-2 py-1.5 sm:py-1 text-sm sm:text-base
                   bg-amber-600 text-white rounded
                   disabled:opacity-40"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;

        //limited buttons on small screens
        const showOnMobile =
          page === currentPage ||
          page === currentPage - 1 ||
          page === currentPage + 1;

        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={`px-3 sm:px-3 py-1.5 sm:py-1 text-sm sm:text-base rounded transition
              ${currentPage === page
                ? "bg-white text-amber-600 border"
                : "bg-amber-600 text-white"}
              ${showOnMobile ? "inline-flex" : "hidden sm:inline-flex"}
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 sm:px-2 py-1.5 sm:py-1 text-sm sm:text-base
                   bg-amber-600 text-white rounded
                   disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}
