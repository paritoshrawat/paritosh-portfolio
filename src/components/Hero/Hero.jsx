import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> hi iam paritosh</h1>
        <p className={styles.description}>
          {" "}
          i am frontend developer with reactjs
        </p>
        <a
          href="mailto: paritoshrawat21@gmail.com"
          className={styles.contactBtn}
        >
          {" "}
          contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
