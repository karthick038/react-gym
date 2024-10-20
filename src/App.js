import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HeaderLogo from './components/Header/Logo';
import { HomePage } from './components/Home';
import { About , Reuse} from './components/About';
import Mynav from './components/Header/Menus';
import Cardthree from './components/Header/Cardsection';


function App() {
  return (
    <div className="App">
      <div className='Header_menu'>
        <HeaderLogo width="150px" altText="Gym Prime Logo" />
        <Mynav />
      </div>
      <Routes>
        <Route path="/" element={<> <HomePage /> <Cardthree />  </>} />
        <Route path="/about" element={<><About /> <Reuse /></>} />
        <Route path="/service" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;