import React, { useState } from "react";
import { useProductContext } from "./useContext";
import { productPropType, sectionProps } from "../Types/type";

export const CheckboxSection: React.FC = () => {
    const { products } = useProductContext();

    const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

    const handleToggle = (id: string) => {
        setVisibleSections((prev) => ({
            ...prev,
            [id]: !prev[id], 
        }));
    };

    return (
        <div className="section">
            {products.map((product: productPropType, productIndex: number) =>

                product.section.map((item: sectionProps, sectionIndex: number) => {

                    const isVisible = visibleSections[item.subid]; 

                    return (
                        <div key={sectionIndex} id={item.common} className={item.id}>
                            <div className="bhead" onClick={() => handleToggle(item.subid)}>
                                <span>{item.name}</span>
                                <img
                                    className="image"
                                    src={product.left.toparrow}
                                />
                            </div>
                            <div
                                id={item.subid}
                                className={`bmianrate ${isVisible ? "nothide" : "hide"}`}
                                style={{ display: isVisible ? "block" : "none" }} 
                             >

                                {item.checkdatas.map((data, dataIndex) => (
                                    <div key={dataIndex} className="bcheck">
                                        <input className={item.class} type="checkbox" value={data} />
                                        <label>{data}</label>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
