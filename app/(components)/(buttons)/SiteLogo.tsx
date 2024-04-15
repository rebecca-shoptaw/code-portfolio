import styles from "./buttons.module.css";
import resetUrl from "@/app/(utils)/utils";
import { SiteLogoProps } from "@/app/(types)/types";

const SiteLogo = ({ switchToInitials, extraStyles }: SiteLogoProps) => {
  return (
    <a
      className={[styles.btn_logo, extraStyles].join(" ")}
      href="#hero"
      onClick={resetUrl}
    >
      {!switchToInitials ? "REBECCA SHOPTAW" : "RS"}
    </a>
  );
};

export default SiteLogo;
