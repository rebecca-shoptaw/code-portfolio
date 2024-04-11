import styles from "./Header.module.css";
import {resetUrl} from '@/app/(utils)/utils'

const NavLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <a
        className={[styles.nav__child, styles.nav__link].join(" ")}
        href={href}
        onClick={resetUrl}
      >
        {text}
      </a>
    </li>
  );
};

export default NavLink;
