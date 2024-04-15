import utils from "@/app/(styles)/utils.module.css";
import styles from "./buttons.module.css";
import { IconButtonProps } from "@/app/(types)/types";

import resetUrl from "@/app/(utils)/utils";

import Link from "next/link";

const IconButton = ({ href, icon, title }: IconButtonProps) => {
  return (
    <Link
      className={[styles.btn_icon, utils.animateScale].join(" ")}
      href={href}
      target="_blank"
      title={title}
      onClick={resetUrl}
    >
      {icon}
    </Link>
  );
};

export default IconButton;
