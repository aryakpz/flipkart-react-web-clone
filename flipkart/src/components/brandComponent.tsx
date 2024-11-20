
import React, { useState } from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";

export const BrandComponent: React.FC = () => {
    const { products, setFilters } = useProductContext();
    const [searchName, setSearchName] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value.toLowerCase());
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const brand = e.target.value.toLowerCase();
        
        setFilters((prev) => {
            
            const selectedBrands = prev.selectedBrands.includes(brand)
                ? prev.selectedBrands.filter((b) => b !== brand)
                : [...prev.selectedBrands, brand];
            return { ...prev, selectedBrands };

        });
    };

    return (
        <div className="left-brand">
            {products.map((product: productPropType, index: number) => (
                <div key={index}>
                    <div className="bhead">
                        <span>{product.left.brand}</span>
                        <img src={product.left.toparrow} alt="Toggle" />
                    </div>
                    <div className="bsearch">
                        <img src={product.left.bimg} alt="Search" />
                        <input
                            type="text"
                            className="inputsearch"
                            placeholder="Search Brand"
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="bmaincheck">
                        {product.left.brandnames
                            .filter((item) => item.toLowerCase().includes(searchName))
                            .map((filteredItem, i) => (
                                <div key={i} className="bcheck">
                                    <input
                                        type="checkbox"
                                        value={filteredItem}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label>{filteredItem}</label>
                                </div>
                            ))}
                        <p className="more">{product.left.more}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};