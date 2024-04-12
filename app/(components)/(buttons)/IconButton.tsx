import React from "react";
import utils from "@/app/(styles)/utils.module.css";
import styles from "./buttons.module.css";
import resetUrl from "@/app/(utils)/utils";

const IconButton = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: any;
  title: string;
}) => {
  return (
    <a
      className={[styles.btn_icon, utils.animateScale].join(" ")}
      href={href}
      target="_blank"
      title={title}
      onClick={resetUrl}
    >
      {icon}
    </a>
  );
};

export default IconButton;
