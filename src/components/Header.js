import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
   <header className="header">
    <Link className="link" to="/">
      <h2 className="title" aria-label="go to main" title="María Mateo" alt="go to main">María Mateo</h2>
    </Link>
    <Link className="link" to="/about">
      <div aria-label="about me" title="About me" alt="about me">About me</div>
    </Link>
       </header>




  )
}

export default Header;