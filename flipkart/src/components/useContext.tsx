
import React, { createContext, useState, useEffect, useContext, useMemo } from "react";
import { phoneProps, productPropType } from "../Types/type";

type ProductContextType = {
    products: productPropType[];
    filteredProducts: phoneProps[];
    setFilters: React.Dispatch<React.SetStateAction<{ searchText: string }>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

    const [filters, setFilters] = useState<{ searchText: string }>({
        searchText: "",
    });


    const filteredProducts = products.flatMap((product) =>
        product.phonesec.filter((item) =>
            item.name.toLowerCase().includes(filters.searchText.toLowerCase())
        )
    );


    return (
        <ProductContext.Provider value={{ products, filteredProducts, setFilters }}>
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
