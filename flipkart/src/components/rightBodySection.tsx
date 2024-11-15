import React from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";
import { PhoneSection } from "./phonesSection";

export const RightSideSection: React.FC = () => {
    const { products } = useProductContext()
    return (
        <div className="rightsec">
            <div className="topright">
                {products.length > 0 ? (
                    products.map((product: productPropType) => (
                        <>
                            <div className="homedata">
                                {product.right.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <span>
                                            <span id="p">{item.val}</span>
                                            <img src={item.icon} />
                                        </span>
                                    </React.Fragment>

                                ))}
                            </div>
                            <div className="contentdata">
                                {product.content}

                            </div>
                            <div className="links">
                                <div className={product.sortsec.id}>
                                    {product.sortsec.name}
                                </div>
                                <div className="sublink">
                                    {product.link.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <span id={item.id} className={item.class}>
                                                {item.name}
                                            </span>

                                        </React.Fragment>
                                    ))}

                                </div>
                            </div>
                            <PhoneSection/>
                        </>
                    ))
                ) : (<p>Something went wrong</p>)}
            </div>
        </div>
    )
}