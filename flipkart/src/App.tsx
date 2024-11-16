import React, { useContext } from 'react';

import './App.css';
import { ProductProvider, useProductContext } from './components/useContext';
import { NavBar } from './components/NavBar';
import { DropDown } from './components/dropDownMenu';
import { LeftSideSection } from './components/leftBodySection';
import { RightSideSection } from './components/rightBodySection';
import { FooterSection } from './components/footerSection';

function App() {
  return (
    <div className='main'>
      <ProductProvider>
        <NavBar />
        <DropDown />
        <div className='bodysec'>
          <div className='subbody'>
            <LeftSideSection />
            <RightSideSection />
          </div>
        </div>
        <footer>
          <FooterSection />
        </footer>
      </ProductProvider>
    </div>
  );
}
export default App;
