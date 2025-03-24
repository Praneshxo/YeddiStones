import React from 'react';
import Link from 'next/link';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">YeddiStones</div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/customize">Customize</Link>
      </div>
    </nav>
  );
};

export default Navbar;
