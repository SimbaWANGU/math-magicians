import React from 'react';
import './Navbar.css';

function Navbar() {
  const links = [{
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 1,
    path: '/calc',
    text: 'Calculator',
  },
  {
    id: 1,
    path: '/quote',
    text: 'Quote',
  }];

  return (
    <nav className="navBar">
      <p className="websiteTitle">Math Magician</p>
      <ul className="navBarList">
        {links.map((link) => <li key={link.id}><a href={link.path}>{link.text}</a></li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
