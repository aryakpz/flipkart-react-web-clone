import { spawn } from "child_process";
import React from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
};

export const PaginationControls: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
}) => {

    return (
        <div className="next">
            <div className="subnext">
                <span className="pagenumber">
                    Page {currentPage} of {totalPages}
                </span>
                <div className="pages">
                    <div className="pre">
                        <button
                            onClick={onPrevious}
                            disabled={currentPage === 1}
                            className="pagination-button"
                        >
                            Previous
                        </button>
                    </div>
                    <div id="count" className={currentPage ? "active" : "nonactive"}>
                        <a>1</a>
                    </div><div id="count" >
                        <a>2</a>
                    </div>
                    <div id="count">
                        <a>3</a>
                    </div>
                    <div className="next">
                        <button
                            onClick={onNext}
                            disabled={currentPage === totalPages}
                            className="pagination-button"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div>
                </div>
            </div> 
        </div>
    );
};



