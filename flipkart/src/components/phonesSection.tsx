import React, { useState } from "react";
import { useProductContext } from "./useContext";
import { phoneProps, productPropType } from "../Types/type";

export const PhoneSection: React.FC = () => {

    const { filteredProducts } = useProductContext()
    
    return (
        <div className="mainphones">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item: phoneProps, index: number) => (
                 
                        <div className="phones">
                            <div className="imagesec">
                                <div className="phoneimage">
                                    <img src={item.phone} />
                                </div>
                                <div className="add">
                                    <input type="checkbox" value={item.compare} />
                                    <label>{item.compare}</label>
                                </div>
                                <div className="heart">
                                    <div className="subhrt">
                                        <img className="hrtimg" src={item.heart} />
                                    </div>
                                </div>
                            </div>
                            <div className="datasec">
                                <div className="leftpart">
                                    <h1>{item.name}</h1>
                                    <div className="rate">
                                        <div className="subrate">
                                            <span className="rating">
                                                {item.data}<img src={item.rateimg} />
                                            </span>
                                            <span className="review">
                                                {item.review}
                                            </span>
                                        </div>
                                    </div>
                                    <ul>
                                        {item.speciality.map((data, index) => (
                                            <li id={data.id}>{data.data}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="rightpart">
                                    <div className="right">
                                        <span className="price">₹{item.price}</span>
                                        <img className={item.asure} src={item.img} />
                                    </div>
                                    <div className="off">
                                        <span className="strike">
                                            {item.strike}
                                        </span>
                                        <span className="off">{item.off}</span>
                                    </div>
                                    <div>
                                        <span className="free">{item.free}</span>
                                    </div>
                                    <div className="save">
                                        <span className="save">
                                            {item.save}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="exchange">
                                            {item.exchange}
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                

                ))
            ) :
                (
                    <h1>No Result Found...</h1>
                )}

        </div>
    )

}