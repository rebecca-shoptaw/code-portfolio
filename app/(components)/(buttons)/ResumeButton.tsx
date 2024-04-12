import HeaderIcon from "./IconButton";
import styles from "./buttons.module.css";
import utils from "@/app/(styles)/utils.module.css";
import { FileIcon, DownloadIcon } from "@radix-ui/react-icons";

const ResumeButton = ({ switchToIcon }: { switchToIcon: boolean }) => {
  return (
    <>
      {!switchToIcon ? (
        <a
          className={[styles.btn_default, utils.animateVertical].join(" ")}
          href="/Rebecca_Shoptaw_resume.pdf"
          target="_blank"
          title="Resume"
        >
          RESUME <DownloadIcon />
        </a>
      ) : (
        <HeaderIcon
          href="/Rebecca_Shoptaw_resume.pdf"
          icon={<FileIcon />}
          title="Resume"
        />
      )}
    </>
  );
};

export default ResumeButton;
