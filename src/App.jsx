import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form from "./components/Form";
import Menu from "./components/Menu";


const App = () => {
  return (
   <>
    <Header/>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/menu" element={<Menu/>} />
    </Routes>
   
    <Footer/>
   </>
  )
}

export default App