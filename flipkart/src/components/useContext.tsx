import React, { createContext, useState, useEffect, useContext } from "react";
import { productPropType } from "../Types/type";

type ProductContextType ={
    products: productPropType[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);


export const ProductProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {

    const [products, setProducts] = useState<productPropType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/data/pr.json");
                const productsData: productPropType[] = await response.json();
                setProducts(productsData); 
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []); 

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};



export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};
