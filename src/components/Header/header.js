import React from 'react';
import { Link } from 'react-router/es6';
import './header.scss';

const Header = (...props) => {
  return(
    <nav className="navbar" role="navigation">
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/about">About</Link>
  </nav>
  )  
}

export {Header}