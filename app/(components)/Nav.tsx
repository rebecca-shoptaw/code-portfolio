"use client";
import { useRef, useState, useEffect } from "react";

const Nav = () => {
  const fixedNavRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const logoRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const [margins, setMargins] = useState({ right: 0, left: 0 });
  useEffect(() => {
    if (fixedNavRef.current && logoRef.current) {
      setMargins({
        right: fixedNavRef.current.offsetWidth,
        left: logoRef.current.offsetWidth,
      });
    }
  }, []);

  return (
    <>
      <a className="nav__child nav__logo" href="#hero" ref={logoRef}>
        Rebecca Shoptaw
      </a>
      <nav id="nav-fixed" className="nav nav--fixed" ref={fixedNavRef}>
        <ul className="nav__wrapper">
          <li>
            <a
              className="nav__child nav__button"
              href="/Rebecca_Shoptaw_resume.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <a className="nav__child nav__button" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav
        className="nav nav--relative"
        style={{
          marginRight: margins.right,
          marginLeft: margins.left,
        }}
      >
        <ul className="nav__wrapper">
          <li>
            <a className="nav__child nav__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav__child nav__link" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="nav__child nav__link" href="#samples">
              Samples
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
