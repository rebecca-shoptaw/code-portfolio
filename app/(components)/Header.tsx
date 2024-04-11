"use client";
import { useRef } from "react";
import styles from "./Header.module.css";
import utils from "../(styles)/utils.module.css";
import NavLink from "./HeaderLink";
import HeaderButton from "./HeaderButton";
import useCalculatedMargins from "@/app/(hooks)/useCalculatedMargins";
import useScrollPosition from "../(hooks)/useScrollPosition";
import resetUrl from "../(utils)/utils";

const Header = () => {
  const fixedNavRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const logoRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const margins = useCalculatedMargins(logoRef, fixedNavRef);
  const pastHeader = useScrollPosition(30);

  return (
    <header className={styles.header}>
      <a
        className={[utils.button, styles.nav__child, styles.nav__logo].join(
          " "
        )}
        href="#hero"
        ref={logoRef}
        onClick={resetUrl}
      >
        {!pastHeader ? "Rebecca Shoptaw" : "rs"}
      </a>
      <nav className={styles["nav--fixed"]} ref={fixedNavRef}>
        <ul className={styles.nav__wrapper}>
          <HeaderButton
            href="/Rebecca_Shoptaw_resume.pdf"
            text={!pastHeader ? "Resume" : "📄"}
          />
          <HeaderButton href="#contact" text="Contact" />
        </ul>
      </nav>
      {margins.left && margins.right && (
        <nav
          className={styles["nav--relative"]}
          style={{
            marginRight: margins.right,
            marginLeft: margins.left,
          }}
        >
          <ul className={styles.nav__wrapper}>
            <NavLink href="#about" text="About" />
            <NavLink href="#experince" text="Experience" />
            <NavLink href="#samples" text="Samples" />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
