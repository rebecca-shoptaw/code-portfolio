"use client";
import styles from "./Header.module.css";

import { useRef } from "react";
import useCalculatedMargins from "@/app/(hooks)/useCalculatedMargins";
import useScrollPosition from "../(hooks)/useScrollPosition";

import NavLink from "./HeaderLink";
import ResumeButton from "./(buttons)/ResumeButton";
import ContactButton from "./(buttons)/ContactButton";
import SiteLogo from "./(buttons)/SiteLogo";
import IconButton from "./(buttons)/IconButton";

import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <SiteLogo
        switchToInitials={true}
      />
      <nav>
        <ul className={styles.nav__wrapper}>
          <li>
            <IconButton
              href="https://www.linkedin.com/in/rebeccashoptaw/"
              icon={<LinkedInLogoIcon />}
              title="LinkedIn"
            />
          </li>
          <li>
            <ResumeButton switchToIcon={true} />
          </li>
          <li>
            <ContactButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
