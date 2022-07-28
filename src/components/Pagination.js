import React from "react";
import ReactPaginate from "react-paginate";

const Paginaion = ({
  darkMode,
  totoalCountries,
  handlePageClick,
  countryPerPageCount,
}) => {
  return (
    <div className="py-5 text-white">
      <ReactPaginate
        previousLabel="< previous"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(totoalCountries?.length / countryPerPageCount)}
        renderOnZeroPageCount={null}
        containerClassName={
          "py-3 flex flex-wrap justify-center md:justify-start"
        }
        pageClassName={"py-3"}
        previousClassName={"py-3"}
        breakClassName={"py-3"}
        nextClassName={"py-3"}
        pageLinkClassName={`border border-sky-500 p-3 ${
          darkMode ? " text-white" : "text-[#111517]"
        }`}
        previousLinkClassName={`border border-sky-500 p-3 ${
          darkMode ? " text-white" : "text-[#111517]"
        }`}
        breakLinkClassName={`border border-sky-500 p-3 ${
          darkMode ? " text-white" : "text-[#111517]"
        }`}
        nextLinkClassName={`border border-sky-500 p-3 ${
          darkMode ? " text-white" : "text-[#111517]"
        }`}
        activeLinkClassName={"bg-red-500"}
        disabledLinkClassName={"bg-gray-700 cursor-auto"}
      />
    </div>
  );
};

export default Paginaion;
