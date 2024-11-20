
import React, { createContext, useState, useEffect, useContext, useCallback } from "react";
import { phoneProps, productPropType, Filters } from "../Types/type";

type ProductContextType = {
    products: productPropType[];
    filteredProducts: phoneProps[];
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
    filters: Filters;
    setFilteredProduct: React.Dispatch<React.SetStateAction<phoneProps[]>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<productPropType[]>([]);
    const [filters, setFilters] = useState<Filters>({
        searchText: "",
        selectedBrands: [],
        ramfilter: [],
        camerafilter: [],
        filtered: [],
        minPrice: null,
        maxPrice: null,
    });
    const [filteredProducts, setFilteredProduct] = useState<phoneProps[]>([]);

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

   
    const applyFilters = useCallback(() => {
        const { searchText, selectedBrands, ramfilter, camerafilter, minPrice, maxPrice } = filters;
  console.log(filters)
        return products
            .flatMap((product) => product.phonesec)
            .filter((phone) => {
                // Search text filter
                const matchesSearchText = phone.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());

                // Brand filter
                const matchesBrand =
                    selectedBrands.length === 0 || selectedBrands.includes(phone.id);

                // RAM filter
                const matchesRam =
                    ramfilter.length === 0 ||
                    phone.speciality?.some((spec) => {
                        const ramMatch = spec.data.match(/(\d+\s*GB)/i);
                        return spec.id === "rom" && ramMatch && ramfilter.includes(ramMatch[0].toLowerCase());
                    });

                // Camera filter
                const matchesCamera =
                    camerafilter.length === 0 ||
                    phone.speciality?.some((spec) => {
                        const cameraMatch = spec.data.match(/(\d+\s*MP)/i);
                        return spec.id === "camara" && cameraMatch && camerafilter.includes(cameraMatch[0].toLowerCase());
                    });

                // Price filter
                const matchesPrice =
                    (minPrice === null || phone.price >= minPrice) &&
                    (maxPrice === null || phone.price <= maxPrice);

                return matchesSearchText && matchesBrand && matchesRam && matchesCamera && matchesPrice;
            });
    }, [filters, products]);

    useEffect(() => {
        const updatedFilteredProducts = applyFilters();
        setFilteredProduct(updatedFilteredProducts);
    }, [applyFilters]);

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                setFilters,
                setFilteredProduct,
                filters,
            }}
        >
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
