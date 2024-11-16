
import React, { useState } from "react";
import { useProductContext } from "./useContext";
import { productPropType } from "../Types/type";

export const NavBar: React.FC = () => {
    const { products,setFilters } = useProductContext();

    

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({ searchText: e.target.value }); // Update the searchText in context
    };
  
    
    return (
        <div className="nav" >
            {products && products.length >= 0 ? (
                products.map((item: productPropType, index: number) => (
                    <div key={index} className="subnav">
                        <div className="fliplogo">
                            <div className="toplogo">
                                <img src={item.nav.fliplogo} />
                                <div className="bottomlogo">
                                    {item.nav.explore}
                                    <span id="plus"> {item.nav.plus}</span>
                                    <img src={item.nav.plogo} />
                                </div>
                            </div>
                        </div>
                        <div className="search">
                            <input className="input"
                                // value={searTerm}
                                placeholder="Search for products, brands and more"
                                onChange={handleSearch} />
                            <img src={item.nav.search} />
                        </div>
                        <button className="navbutton">{item.nav.login}</button>
                        <div className="seller">{item.nav.seller}</div>
                        <div className="more">{item.nav.more}
                            <img src={item.nav.down} />
                        </div>
                        <div className="cart">
                            <img src={item.nav.cartimg} />
                            {item.nav.cart}
                        </div>
                    </div>
                )
                )
            ) : (
                <p>No result found</p>
            )}
        </div>
    );
};



