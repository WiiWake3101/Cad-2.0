"use client";
import Link from "next/link";
import { useState } from "react";
import "./nav.css";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className={`nav ${isNavOpen ? "openNav" : ""}`}>
      <i className="uil uil-bars navOpenBtn" onClick={toggleNav}></i>
      <h1 className="logo">LegalAssist</h1>
      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
        <li>
          <Link href="/" id="inside">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" id="inside">
            Services
          </Link>
        </li>
        <li>
          <Link href="/" id="inside">
            Chat-bot
          </Link>
        </li>
        <li>
          <Link href="/login" id="inside">
            <button>Log-In/Out</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
