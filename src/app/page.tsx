import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

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
          <p className={styles.big_title}>Welcome</p>
          <p className={styles.big_title}>To</p>
          <p className={styles.big_title}>My Site</p>
        </div>

        <div className={styles.box}>
          <p className={styles.big_title}>Welcome</p>
          <p className={styles.big_title}>To</p>
          <p className={styles.big_title}>My Site</p>
        </div>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
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
