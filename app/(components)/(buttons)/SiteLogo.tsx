import utils from "@/app/(styles)/utils.module.css";
import styles from "../Header.module.css";
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
      className={[utils.button, styles.nav__child, styles.nav__logo].join(" ")}
      href="#hero"
      ref={logoRef}
      onClick={resetUrl}
    >
      {!switchToInitials ? "REBECCA SHOPTAW" : "RS"}
    </a>
  );
};

export default SiteLogo;
