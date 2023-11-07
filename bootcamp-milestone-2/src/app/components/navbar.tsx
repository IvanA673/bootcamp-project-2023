import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
    <header>
      <nav className={style.navbar}>
        <h1 className={style.logo}>
          <Link href="/index">Ivan Alvarez</Link>
        </h1>
        <ul className={style.navList}>
          <li>
          <Link href="/index">Home</Link>
          </li>
          <li>
          <Link href="/blog">Blog</Link>
          </li>
          <li>
          <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
          <Link href="/resume">Resume</Link>
          </li>
          <li>
          <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}