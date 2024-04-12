import utils from "@/app/(styles)/utils.module.css";
import styles from "./Header.module.css";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const ContactButton = () => {
  return (
    <a
      className={[
        utils.button,
        utils.animateHorizontal,
        styles.nav__button,
      ].join(" ")}
      href="mailto:rebecca@rebeccashoptaw.dev"
      target="_blank"
    >
      CONTACT <ArrowRightIcon />
    </a>
  );
};

export default ContactButton;
