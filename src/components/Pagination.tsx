import ReactPaginate from "react-paginate";
import useDogsSearch from "../hooks/useDogsSearch";
import useParams from "../hooks/useParams";
import { useEffect, useState } from "react";
function Pagination() {
  const { totalResults } = useDogsSearch();
  const { append, searchParams } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page: { selected: number }) {
    searchParams.delete("from");
    setCurrentPage(page.selected + 1);
    append("from", (page.selected * 25).toString());
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    setCurrentPage(() => {
      const fromTotal = searchParams.get("from") ?? 0;
      return Number(fromTotal) / 25;
    });
  }, [searchParams]);

  const pageCount = Math.ceil(totalResults / 25);

  if (pageCount > 0) {
    return (
      <>
        <ReactPaginate
          pageClassName="p-4"
          forcePage={currentPage}
          activeClassName="bg-black text-white"
          className="flex flex-row gap-2 bg-slate-200 items-center justify-center mt-5 flex-wrap w-72 mx-auto sm:w-full"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          marginPagesDisplayed={2}
        />
      </>
    );
  }

  return null;
}

export default Pagination;
