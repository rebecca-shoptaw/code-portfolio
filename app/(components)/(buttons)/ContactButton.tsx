import utils from "@/app/(styles)/utils.module.css";
import styles from "./buttons.module.css";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const ContactButton = () => {
  return (
    <a
      className={[styles.btn_default, utils.animateHorizontal].join(" ")}
      href="mailto:rebecca@rebeccashoptaw.dev"
      target="_blank"
      title="Contact"
    >
      CONTACT <ArrowRightIcon />
    </a>
  );
};

export default ContactButton;
