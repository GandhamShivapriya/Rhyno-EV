import React from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home/Home"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import About from "./pages/About/about"
import Contact_Us from "./pages/Contact_Us/contact"
import Products_com from "./pages/Products_com/productscom"
import Prebook from "./pages/Prebook/prebook"
import Navbar from "./components/Navbar/navbar"

// import Home from "./components/Home/Home";

const App = () => {
  return (
   <div>
     <Router>
      <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/ about' element={<About/>}/>
      <Route path='/ Product_com' element={<Products_com/>}/>
      <Route path='/ contact_us' element={<Contact_Us/>}/>
      <Route path='/ Prebook' element={<Prebook/>}/>
    </Routes>
    </Router>
      </div>
  );
};
export default App;
//Always write the words after const starting with capital letter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();