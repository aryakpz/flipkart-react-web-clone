import React from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";
export const FooterSection:React.FC=()=>{

    const {products}=useProductContext()
    return(
        <div className="footer">
          {products.length >0 ? (
            products.map((item:productPropType,index:number)=>(
                item.mao
            ))

          ):(

          )}
        </div>
    )
}