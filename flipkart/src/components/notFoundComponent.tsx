
import React from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";

export const NotFound: React.FC = () => {
    const { products } = useProductContext()
    return (
        <div className="notfound-section">
            {products.map((item: productPropType) => (
               <div className="sub-notfound">
                    <div className="notfound-image">
                      <img src={item.notfound.img}/>
                    </div>
                    <div className="sorry-section">
                        <span>{item.notfound.sorry}</span>
                    </div>
                    <div className="please-section">
                        <span>{item.notfound.please}</span>
                    </div>
               </div>
            ))
          }
        </div>
    ) 
}

