import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./layouts/Client"
import Home from "./pages/Home/Index.jsx"
import Category from "./pages/Category/Index.jsx"
import Industry from "./pages/Industry/Index.jsx"
import Company from "./pages/Company/Index.jsx"
import About from "./pages/About/Index.jsx"
import Services from "./pages/Services/Index.jsx"
import Contact from "./pages/Contact/Index.jsx"
import Wishlist from "./pages/Wishlist/Index.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />} >
          <Route index element={<Home/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/industry" element={<Industry/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
