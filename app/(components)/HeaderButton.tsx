import styles from "./Header.module.css";
import utils from "@/app/(styles)/utils.module.css";
import resetUrl from "../(utils)/utils";

const HeaderButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a
        className={[utils.button, styles.nav__button].join(" ")}
        href={href}
        onClick={resetUrl}
      >
        {text}
      </a>
    </li>
  );
};

export default HeaderButton;
