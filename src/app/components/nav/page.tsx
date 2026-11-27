
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container">

        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold fs-3">
          GAME<span className="text-info">ZONE</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gamingNavbar"
          aria-controls="gamingNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="gamingNavbar">
          <ul className="navbar-nav mx-auto gap-lg-3">

            <li className="nav-item">
              <Link href="/" className="nav-link active">Home</Link>
            </li>

            <li className="nav-item">
              <Link href="/products" className="nav-link">Products</Link>
            </li>

            <li className="nav-item">
              <Link href="/categories" className="nav-link">Categories</Link>
            </li>

            <li className="nav-item">
              <Link href="/offers" className="nav-link disabled">Offers</Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link disabled">About</Link>
            </li>

            <li className="nav-item">
              <Link href="/contact" className="nav-link disabled">Contact</Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <Link href="/cart" className="btn btn-outline-info disabled">
              🛒 Cart
            </Link>

            <Link href="/login" className="btn btn-info fw-semibold disabled">
              Login
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
