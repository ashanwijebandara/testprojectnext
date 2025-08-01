import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Transform your ideas into reality with our expert design services.</p>
        <Button url="/portfolio" text="See Our Work" />

      </div>
      <div className={styles.item}></div>
      <Image src={Hero} alt="Hero" className={styles.img} />
    </div>
  );
}
