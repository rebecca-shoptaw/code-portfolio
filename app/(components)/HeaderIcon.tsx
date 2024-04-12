import React from "react";
import utils from "@/app/(styles)/utils.module.css";
import styles from "./Header.module.css";
import resetUrl from "../(utils)/utils";

const HeaderIcon = ({ href, icon }: { href: string; icon: any }) => {
  return (
    <a
      className={[styles.nav__icon, utils.animateScale].join(" ")}
      href={href}
      target="_blank"
      onClick={resetUrl}
    >
      {icon}
    </a>
  );
};

export default HeaderIcon;
