import React from "react";
import ReactPaginate from "react-paginate";

type PaginationPropsType = {
  pagesCount: number;
  onPageChange: (e: { selected: number }) => void;
};
const PaginationComponent = ({
  pagesCount = 1,
  onPageChange = () => {},
}: PaginationPropsType) => {
  return (
    <div className="row my-4 justify-content-center">
      <div className="col-md-6">
        <ReactPaginate
          pageCount={pagesCount}
          initialPage={0}
          onPageChange={onPageChange}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
