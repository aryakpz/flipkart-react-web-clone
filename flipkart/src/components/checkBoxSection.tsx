
// import React, { useState } from "react";
// import { useProductContext } from "./useContext";
// import { Filters } from "../Types/type";
// export const CheckboxSection: React.FC = () => {
//     const { products, setFilters } = useProductContext();

//     const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
    
//     const handleToggle = (id: string) => {
//         setVisibleSections((prev) => ({
//             ...prev,
//             [id]: !prev[id],
//         }));
//     };

//     const handleChange = (
//         className: keyof Filters, 
//         value: string, 
//         isChecked: boolean
//         ) => { setFilters((prevFilters) => {
//             const updatedFilterValues = isChecked
//                 ? [...(prevFilters[className] || []), value]   
//                 : (prevFilters[className] || []).filter((item: string) => item !== value);  

//             return {
//                 ...prevFilters,
//                 [className]: updatedFilterValues,
//             };
//         });
//     };

//     return (
//         <div className="section">
//             {products.map((product, productIndex) =>
//                 product.section.map((item, sectionIndex) => {
//                     const isVisible = visibleSections[item.subid];

//                     return (
//                         <div key={sectionIndex} id={item.common} className={item.id}>
//                             <div className="bhead" onClick={() => handleToggle(item.subid)}>
//                                 <span>{item.name}</span>
//                                 <img
//                                     className="image"
//                                     src={product.left.toparrow}
//                                     alt="Toggle Icon"
//                                 />
//                             </div>
//                             <div
//                                 id={item.subid}
//                                 className={`bmianrate ${isVisible ? "nothide" : "hide"}`}
//                                 style={{ display: isVisible ? "block" : "none" }}
//                             >
//                                 {item.checkdatas.map((data, dataIndex) => (
//                                     <div key={dataIndex} className="bcheck">
//                                         <input
//                                             className={item.class} 
//                                             type="checkbox"
//                                             value={data}
//                                             onChange={(e) =>
//                                                 handleChange(
//                                                     item.class as keyof Filters,   
//                                                     data,        
//                                                     e.target.checked  
//                                                 )
//                                             }
//                                         />
//                                         <label>{data}</label>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     );
//                 })
//             )}
//         </div> 
//     );
// };
 
import React, { useState } from "react";
import { useProductContext } from "./useContext";
import { Filters } from "../Types/type";
import { ppid } from "process";
import { isObjectLiteralExpression, isOptionalChain, isRestTypeNode, isTypeOnlyImportOrExportDeclaration, OperationCanceledException } from "typescript";
import { isBooleanObject } from "util/types";

export const CheckboxSection: React.FC = () => {
    const { products, setFilters, filters } = useProductContext();

    const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

    const handleToggle = (id: string) => {
        setVisibleSections((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleChange = (
        className: keyof Filters,
        value: string,
        isChecked: boolean
    ) => {
        setFilters((prevFilters) => {
            const updatedFilterValues = isChecked
                ? [...(prevFilters[className] || []), value]   // Add the value to the array if checked
                : (prevFilters[className] || []).filter((item:string) => item !== value);  // Remove if unchecked

            return {
                ...prevFilters,
                [className]: updatedFilterValues,  // Update the correct filter (e.g., ram)
            };
        });
    };

    return (
        <div className="section">
            {products.map((product, productIndex) =>
                product.section.map((item, sectionIndex) => {
                    const isVisible = visibleSections[item.subid];

                    return (
                        <div key={sectionIndex} id={item.common} className={item.id}>
                            <div className="bhead" onClick={() => handleToggle(item.subid)}>
                                <span>{item.name}</span>
                                <img
                                    className="image"
                                    src={product.left.toparrow}
                                    alt="Toggle Icon"
                                />
                            </div>
                            <div
                                id={item.subid}
                                className={`bmianrate ${isVisible ? "nothide" : "hide"}`}
                                style={{ display: isVisible ? "block" : "none" }}
                            >
                                {item.checkdatas.map((data, dataIndex) => (
                                    <div key={dataIndex} className="bcheck">
                                        <input
                                            className={item.class}
                                            type="checkbox"
                                            value={data}
                                            onChange={(e) =>
                                                handleChange(
                                                    item.class as keyof Filters,   // e.g., ram
                                                    data,                         // RAM size (e.g., '4 GB')
                                                    e.target.checked              // Whether the checkbox is checked
                                                )
                                            }
                                        />
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

