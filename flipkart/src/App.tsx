import React, { useContext } from 'react';

import './App.css';
import { ProductProvider, useProductContext } from './components/useContext';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { DropDown } from './components/dropDownMenu';
import { LeftSideSection } from './components/leftBodySection';
import { RightSideSection } from './components/rightBodySection';

function App() {

  return (
    <div className='main'>
      <ProductProvider>
        <NavBar />
        <DropDown />
        <div className='bodysec'>
          <div className='subbody'>
            <LeftSideSection />
            <RightSideSection/>
          </div>
        </div>
        <Home />
      </ProductProvider>
    </div>

  );
}

export default App;
