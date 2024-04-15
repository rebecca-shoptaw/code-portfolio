"use client";
import Image from "next/image";
import styles from "./Hero.module.css";

import IconButton from "./(buttons)/IconButton";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import ResumeButton from "./(buttons)/ResumeButton";
import ContactButton from "./(buttons)/ContactButton";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero__column}>
        <Image
          className={styles.hero__image}
          src="/RShoptaw_ProfilePhoto.jpg"
          alt="Photo of Rebecca Shoptaw"
          width={692}
          height={784}
          priority
        />
        <section className={styles.hero__title}>
          <h1>REBECCA SHOPTAW</h1>
          <h2>NYC-based Software Engineer</h2>
        </section>
      </div>
      <div className={styles.hero__column}>
        <section className={styles.hero__card}>
          <p className={styles.hero__card__title}>EXPERIENCE</p>
        </section>
        <section className={styles.hero__card}>
          <p className={styles.hero__card__title}>TECHNOLOGIES</p>
        </section>
        <section className={styles.hero__buttons}>
          <IconButton
            href="https://www.linkedin.com/in/rebeccashoptaw/"
            icon={<LinkedInLogoIcon />}
            title="LinkedIn"
          />
          <ResumeButton switchToIcon={false} />
          <ContactButton />
        </section>
      </div>
    </section>
  );
};

export default Hero;
