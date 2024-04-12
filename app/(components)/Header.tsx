"use client";
import { useRef } from "react";
import useCalculatedMargins from "@/app/(hooks)/useCalculatedMargins";
import useScrollPosition from "../(hooks)/useScrollPosition";

import styles from "./Header.module.css";

import NavLink from "./HeaderLink";
import HeaderIcon from "./HeaderIcon";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import ResumeButton from "./(buttons)/ResumeButton";
import ContactButton from "./(buttons)/ContactButton";
import SiteLogo from "./(buttons)/SiteLogo";

const Header = () => {
  const fixedNavRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const logoRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;
  const margins = useCalculatedMargins(logoRef, fixedNavRef);
  const pastHeader = useScrollPosition(30);

  return (
    <header className={styles.header}>
      <SiteLogo logoRef={logoRef} switchToInitials={pastHeader} />
      <nav className={styles["nav--fixed"]} ref={fixedNavRef}>
        <ul className={styles.nav__wrapper}>
          <li>
            <HeaderIcon
              href="https://www.linkedin.com/in/rebeccashoptaw/"
              icon={<LinkedInLogoIcon />}
            />
          </li>
          <li>
            <ResumeButton switchToIcon={pastHeader} />
          </li>
          <li>
            <ContactButton />
          </li>
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
            <NavLink href="#about" text="ABOUT" />
            <NavLink href="#experince" text="EXPERIENCE" />
            <NavLink href="#samples" text="SAMPLES" />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
