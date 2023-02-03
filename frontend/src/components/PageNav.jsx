import React from "react";

function PageNav({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center gap-6 m-6">
      {page > 0 ? (
        <button
          className="bg-red text-white h-8 w-20 rounded-md"
          type="button"
          onClick={() => {
            setPage(page - 1);
          }}>
          Previous
        </button>
      ) : (
        <button className="opacity-40" disabled>
          Previous
        </button>
      )}
      <div className="flex items-center">
        <p className="font-semibold">{totalPages}</p>
      </div>
      {page < totalPages ? (
        <button
          className="bg-red text-white h-8 w-20 rounded-md"
          onClick={() => {
            setPage(page + 1);
          }}>
          Next
        </button>
      ) : (
        <button className="opacity-40" disabled>
          Next
        </button>
      )}
    </div>
  );
}

export default PageNav;
