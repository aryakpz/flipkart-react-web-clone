
import React, { useState } from "react";
import { useProductContext } from "./useContext";
import { phoneProps } from "../Types/type";
import { NotFound } from "./notFoundComponent";
import { PaginationControls } from "./paginationControl";

export const PhoneSection: React.FC = () => {
    const { filteredProducts } = useProductContext();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="mainphones">
            {paginatedProducts.length > 0 ? (
                paginatedProducts.map((item: phoneProps, index: number) => (
                    <div key={index} className="phones">

                        <div className="imagesec">
                            <div className="phoneimage">
                                <img src={item.phone} alt={item.name} />
                            </div>
                            <div className="add">
                                <input type="checkbox" value={item.compare} />
                                <label>{item.compare}</label>
                            </div>
                            <div className="heart">
                                <div className="subhrt">
                                    <img className="hrtimg" src={item.heart} alt="heart" />
                                </div>
                            </div>
                        </div>
                        <div className="datasec">
                            <div className="leftpart">
                                <h1>{item.name}</h1>
                                <div className="rate">
                                    <div className="subrate">
                                        <span className="rating">
                                            {item.data}
                                            <img src={item.rateimg} alt="rating" />
                                        </span>
                                        <span className="review">{item.review}</span>
                                    </div>
                                </div>
                                <ul>
                                    {item.speciality.map((data, index) => (
                                        <li key={index} id={data.id}>
                                            {data.data}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rightpart">
                                <div className="right">
                                    <span className="price">₹{item.price}</span>
                                    <img className={item.asure} src={item.img} alt="product" />
                                </div>
                                <div className="off">
                                    <span className="strike">{item.strike}</span>
                                    <span className="off">{item.off}</span>
                                </div>
                                <div>
                                    <span className="free">{item.free}</span>
                                </div>
                                <div className="save">
                                    <span className="save">{item.save}</span>
                                </div>
                                <div>
                                    <span className="exchange">{item.exchange}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <NotFound />
            )}

            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevious={handlePrevious}
                onNext={handleNext}
            />
        </div>
    );
};
