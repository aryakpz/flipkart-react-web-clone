import React from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";

export const DropDown: React.FC = () => {
    const { products } = useProductContext();

    return (
        <div className="dropmenu">
            <div className="subnav">
                {products.length > 0 ? (
                    products.map((product: productPropType) => (
                        product.drop.map((item, index) => (
                            <React.Fragment key={index}>
                                <span>{item.data}
                                <img src={item.icon} alt="Dropdown icon" />
                                </span>
                                
                            </React.Fragment>
                        ))
                    ))
                ) : (
                    <p>No result found</p>
                )}
            </div>
        </div>
    );
};
