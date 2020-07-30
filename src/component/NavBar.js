import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link, useLocation } from 'react-router-dom';

const NavBar = () => {

    // const menu = this.props.match.params.menu;
    // var color = (menu == "") ? "bg-dark" : "bg-light";{ location.href == "/" ? "d-none" : ""}
    // var color = "bg-light";
    return(
      <div className="pt-1">
        <Link className="text-white" to={process.env.PUBLIC_URL + "/"}>
            <h1>Cocktail Database</h1>
            <span>Powered by Cocktail DB API</span>
          </Link>
        
        {/*         
        <nav className={ "navbar navbar-expand-md navbar-light fixed-top pl-lg-5 bg-warning"} id="navbar">
          <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/"}>
            <h3>Cocktail Database</h3>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About</Link></li>
            </ul>
          </div>
        </nav> */}
      </div>


    
    )
}
export default NavBar;