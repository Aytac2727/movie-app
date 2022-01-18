import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import './header.scss'
const Header = () => {
    const [isActive, setisActive] = useState("")
    useEffect(() => {
        window.addEventListener("scroll",function(){
            if(window.scrollY>100){
                setisActive("active")
            }  else{
                setisActive("")
            }
          })
        
    },[isActive])

    return (
        <header className={`header ${isActive}`}>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="logo">
                        <img width={100} src={logo} alt="" />
                    </div>
                    <nav className="menu">
                        <ul className="d-flex list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
