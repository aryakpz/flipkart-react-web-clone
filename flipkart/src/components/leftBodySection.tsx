import React from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";

export const LeftSideSection: React.FC = () => {

    const { products } = useProductContext()
    return (
        <div className="leftsec">

                {products.length > 0 ? (
                    products.map((product: productPropType, index: number) => (
                        <div className="subleft" key={index}>
                            <div className="left-filter">
                                <div className="left-sub-filter">
                                    <div className="filterone">
                                        {product.left.filter}
                                    </div>
                                </div>
                            </div>
                            <div className="left-category">
                                <p className="pdata">{product.left.category}</p>
                                <span className="spandata">
                                    <img src={product.left.image} />{product.left.access}
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

                            </div>

                        </div>

                    ))
                ) : (
                    <p>no items</p>
                )}
            </div>
    )

}