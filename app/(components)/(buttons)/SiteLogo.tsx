import styles from "./buttons.module.css";
import resetUrl from "@/app/(utils)/utils";

const SiteLogo = ({
  logoRef,
  switchToInitials,
}: {
  logoRef: React.MutableRefObject<HTMLAnchorElement>;
  switchToInitials: boolean;
}) => {
  return (
    <a
      className={styles.btn_logo}
      href="#hero"
      ref={logoRef}
      onClick={resetUrl}
    >
      {!switchToInitials ? "REBECCA SHOPTAW" : "RS"}
    </a>
  );
};

export default SiteLogo;
