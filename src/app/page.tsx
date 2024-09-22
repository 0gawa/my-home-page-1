import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Tag from "@/app/ui/tag";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/">
            Daiki
        </Link>
      </header>
      <main className={styles.main}>
        <div className={styles.box}>
          <p className={styles.big_title}>
            My Mission Is To<br/>
            Deliver Excitement
          </p>
        </div>

        <div className={styles.box}>
          <h1 className={styles.h1_title}>Portfolio</h1>
        </div>

        <div className={styles.box}>
          <h1 className={styles.h1_title}>About me</h1>
          
        </div>

        <div className={styles.box}>
          <h1 className={styles.h1_title}>Keyword</h1>
          <div className={styles.tag_box}>
            <Tag content={"Ruby"}></Tag>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          © daiki-portfolio.site
        </a>
        <a
          href="https://sauna-tankentai.daiki-portfolio.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          サウナ探検隊 →
        </a>
        <a
          href="https://hitori-times.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          hitori-times.com →
        </a>
      </footer>
    </div>
  );
}
