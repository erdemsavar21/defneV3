import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Galleries from './pages/Galleries';
import Contacts from './pages/Contacts';

import { Routes, Route, Navigate } from 'react-router-dom';
import Impressum from './pages/Impressum';
import PrivacyPolicy from './pages/PrivacyPolicy';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  )
}

export default App
