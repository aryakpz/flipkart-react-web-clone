
import React, { useState, useEffect } from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";
import { BrandComponent } from "./brandComponent";
import { CheckboxSection } from "./checkBoxSection";

export const LeftSideSection: React.FC = () => {
    const { products, setFilters, filters } = useProductContext();
  
  const handleUpdate = (e: React.ChangeEvent<HTMLSelectElement>, type: string) => {
  const value = e.target.value;
  if (type === "min") {
    const minPrice = value === "" ? null : parseInt(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice,
    }));
  } else if (type === "max") {
    const maxPrice = value === "" ? null : parseInt(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice,
    }));
  }
};
    return (
        <div className="leftsec">
            {products.length > 0 ? (
                products.map((product: productPropType, index: number) => (
                    <div className="subleft" key={index}>
                        <div className="left-filter">
                            <div className="left-sub-filter">
                                <div className="filterone">{product.left.filter}</div>
                            </div>
                        </div>
                        <div className="left-category">
                            <p className="pdata">{product.left.category}</p>
                            <span className="spandata">
                                <img src={product.left.image} alt={product.left.category} />
                                {product.left.access}
                            </span>
                            <p className="mobdata">{product.left.mobile}</p>
                        </div>
                        <div className="left-price">
                            {product.left.price}
                            <div className="rangebar"></div>
                            <div className="range">
                                <div className="mainrange">
                                    <div className="lsub">
                                        <div className="lround"></div>
                                    </div>
                                    <div className="midd">
                                        <div className="submidd"></div>
                                    </div>
                                    <div className="rsub">
                                        <div className="rround"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="minmax">
                                <div className="min">
                                    <select
                                        id="min-select"
                                        value={filters.minPrice ?? ""}
                                        onChange={(e) => handleUpdate(e, "min")}
                                    >
                                        {product.left.min.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="to">to</div>
                                <div className="max">
                                    <select
                                        id="max-select"
                                        value={filters.maxPrice ?? ""}
                                        onChange={(e) => handleUpdate(e, "max")}
                                    >

                                        {product.left.max.map((item) => (
                                            <option key={item} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <BrandComponent />
                        <CheckboxSection />
                    </div>
                ))
            ) : (
                <p>No items found</p>
            )}
        </div>
    );
};
