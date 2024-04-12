import HeaderIcon from "../HeaderIcon";
import styles from "../Header.module.css";
import utils from "@/app/(styles)/utils.module.css";
import { FileIcon, DownloadIcon } from "@radix-ui/react-icons";

const ResumeButton = ({ switchToIcon }: { switchToIcon: boolean }) => {
  return (
    <>
      {!switchToIcon ? (
        <a
          className={[
            utils.button,
            styles.nav__button,
            utils.animateVertical,
          ].join(" ")}
          href="/Rebecca_Shoptaw_resume.pdf"
          target="_blank"
        >
          RESUME <DownloadIcon />
        </a>
      ) : (
        <HeaderIcon href="/Rebecca_Shoptaw_resume.pdf" icon={<FileIcon />} />
      )}
    </>
  );
};

export default ResumeButton;
