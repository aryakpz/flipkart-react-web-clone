
import React, { useState, useEffect } from "react";
import { useProductContext } from "./useContext";
import { productPropType,phoneProps } from "../Types/type";
import { PhoneSection } from "./phonesSection";

export const RightSideSection: React.FC = () => {
    const { products, setFilteredProduct } = useProductContext();
    const [activeItemId, setActiveItemId] = useState<string | null>(null);


    useEffect(() => {
        if (products.length > 0) {
            const firstItemId = products[0]?.link[0]?.id || null;
            setActiveItemId(firstItemId);
        }                     
    }, [products]);                                             
        
                         
    const handleToggle = (id: string) => {
        setActiveItemId((prev) => (prev === id ? null : id)); 
        sortProducts(id);
    };


    const sortProducts=(id:string)=>{
        let sortedList :phoneProps[]=[]
        switch(id){
            case "low":
                sortedList=products.flatMap((product:productPropType)=>(
                     product.phonesec.sort((a,b)=> a.price - b.price)
                ))
                break;
            case "high":
                sortedList=products.flatMap((product)=>(
                    product.phonesec.sort((a,b)=>b.price -a.price)
                ))
                break;
            default:
                sortedList=products.flatMap(product=>product.phonesec)
                break;
        }
        setFilteredProduct(sortedList)
    }

    return (
        <div className="rightsec">
            <div className="topright">
                {products.length > 0 ? (
                    products.map((product: productPropType, index: number) => (
                        <React.Fragment key={index}>
                            <div className="homedata">
                                {product.right.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        <span>
                                            <span id="p">{item.val}</span>
                                            <img src={item.icon} alt="Icon" />
                                        </span>
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="contentdata">{product.content}</div>

                            <div className="links">
                                <div className={product.sortsec.id}>{product.sortsec.name}</div>
                                <div className="sublink">
                                    {product.link.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            <span
                                                id={item.id}
                                                className={`${item.class} ${activeItemId === item.id ? "active" : ""}`}
                                                onClick={() => handleToggle(item.id)}
                                            >
                                                {item.name}
                                            </span>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <PhoneSection />
                        </React.Fragment>
                    ))
                ) : (
                    <p>Something went wrong</p>
                )}
            </div>
        </div>
    );
};
