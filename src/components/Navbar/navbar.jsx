import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"; //since its a css file we dont mention import navbar from './navbar.css11
import rhyno_logo from "../../assets/rhyno_logo.png";
import menu_icon from "../../assets/menu_icon.png";
const Navbar = () => {
  //the name Here i.e navbar should be equal to navbar in import and return of App.js
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const handlescroll=()=>{
      const offset=window.scrollY;
      if(offset>50){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener('scroll',handlescroll)//if window is scrolled then call handle function
    return()=>{
    window.removeEventListener('scroll',handlescroll)//if window is not scrolled to before the effect occurs
    }
  },[])
  const[mobileMenu,setmobileMenu]=useState(false)
  const togggleMenu=()=>{
      mobileMenu?setmobileMenu(false):setmobileMenu(true);
  }

  
  return (
    <React.Fragment>
    <nav className= {`navbar ${scrolled ? 'scrolled' : ''} `}>
      <img src={rhyno_logo} alt="" className="logo" />
      <ul className={mobileMenu?"":'hide_mobile_menu'}>
        <li className="menu"><Link to="/">Home</Link></li>
        <li className="menu"><Link to="/ about">About Us</Link></li>

        <li className=''><Link to="/ Product_com#proimg" >
          {" "}
          <div className="dropdown  ">
            <button
              className=" dropdown-toggle btn btn-secondary "
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product
            </button>
            <ul className= "dropdown-menu dropdown-menu-dark">
              <li>
                <Link to="/ Product_com#product1" smooth={true} offset={0} duration={500}><a className="dropdown-item"  href="#">
                SE03 Lite
                </a></Link>
              </li>
              <li>
              <Link to="/ Product_com#product2" smooth={true} offset={0} duration={500}><a className="dropdown-item"  href="#">
                SE03
                </a>
                </Link></li>
              <li>
              <Link to="/ Product_com#product3" smooth={true} offset={0} duration={500}><a className="dropdown-item"  href="#">
                SE03 Max
                </a>
              </Link></li>
            </ul>
          </div>
          </Link></li>

        <li className="menu"><Link to="/ contact_us">Contact Us</Link></li>
        <li className="menu"><Link to="/ Prebook">Prebook-Now</Link></li>
        <li className="icons">
        <a href="https://www.instagram.com/rhyno.in/">
          <i className="fa-brands fa-instagram know_icon"></i>
        </a>
        
          
        </li>
        <li className="icons">
        <a href="https://www.linkedin.com/company/rhyno-wheels">
          <i className="fa-brands fa-linkedin i know_icon"> </i>
        </a>
        </li>
      </ul>
      <img src={menu_icon} className='menu_icon'onClick={togggleMenu}/>
    </nav>
    </React.Fragment>
    
  );
  
  
};

export default Navbar;
// ../ --> we are coming 1 folder out
