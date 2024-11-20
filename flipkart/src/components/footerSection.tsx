import React from "react";
import { useProductContext } from "./useContext";
import { bottomProps, foot1Props, productPropType } from "../Types/type";
export const FooterSection: React.FC = () => {

    const { products } = useProductContext()
    return (
        <>
            <div className="footer">
                <div className="footer1">
                    {products.length > 0 ? (
                        products.map((product: productPropType, productIndex: number) => (
                            product.footer.foot1.map((item: foot1Props, itemIndex: number) => (
                                <div className="footsec" id={item.id}>
                                    <div className="foothead">{item.name}</div>

                                    {item.loop.map((link: string, linkIndex: number) => (
                                        <p>{link}</p>
                                    ))}
                                </div>
                            ))
                        ))
                    ) : (
                        <p>No items found</p>
                    )}
                </div>
            </div>
            <div className="mainbottom">
                <div className="bottom">
                    {
                        products.map((product: productPropType, pindex: number) => (
                            product.footer.bottom.map((item: bottomProps, index: number) => (
                                <div>
                                    <img src={item.img} />
                                    <span>{item.data}</span>
                                </div>
                            ))
                        ))
                    }
                </div>
            </div>

        </>
    )
}




















