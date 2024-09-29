import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Tag from "@/app/ui/tag";
import PortfolioBox from "@/app/ui/portfolio_box";
import site_logo from "./images/top/site_logo.png";
import saunaTankentai from "./images/saunaTankentai.png"

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/">
          <Image
              aria-hidden
              src={site_logo}
              alt="DAIKI"
              width={60}
              height={60}
            />
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
          <h1 className="text-center pt-12 text-5xl font-semibold">Portfolio</h1>
          <div className="h-5/6 flex justify-center items-center">
            <PortfolioBox
              title="サウナ探検隊"
              subTitle="サウナーによるサウナーのためのアプリ"
              express="このアプリはサウナ活動を記録し、自分にあった入り方を見つけるためのアプリです。"
              uri = "https://sauna-tankentai.daiki-portfolio.site/"
              devLang="Rails, JavaScript"
              image_path={saunaTankentai}
              points="パスワードの再設定機能、サウナ施設検索、Google APIを使用したログインと地図表示"
            ></PortfolioBox>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.profileBox}>
            <h1 className={styles.expressTitle}>About me</h1>
          </div>
          <div className={styles.expressBox}>
            <div className={styles.express}>
              <p>
              私はCS専攻の大学生です。大学入学と同時にプログラミングを始め、その面白さに魅了されました。
              その後、積極的に勉強をし大学2年生のときに応用情報技術者試験に合格しました。他にも数学技能検定準1級
              、統計検定2級、TOEIC790などを保有しています。<br/><br/>
              
              これに加えて、Webアプリケーション開発にも力を入れています。フロントエンド、バックエンドからインフラ周り
              までフルスタックに開発しています。最近はUIのことについて学んでいます。<br/><br/>
              これまでに培った幅広い知識と実践的なスキルを活かし、社会にワクワクを届けたいと考えています。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <h1 className="text-3xl pl-5 mb-7 ms-12 font-semibold border-yellow-300 border-l-8">Keyword</h1>
          <div className={styles.tag_box}>
            <Tag content={"Ruby"}></Tag>
            <Tag content={"Python"}></Tag>
            <Tag content={"HTML"}></Tag>
            <Tag content={"CSS"}></Tag>
            <Tag content={"Rails"}></Tag>
            <Tag content={"JavaScript"}></Tag>
            <Tag content={"Next.js"}></Tag>
            <Tag content={"React"}></Tag>
            <Tag content={"Web Development"}></Tag>
            <Tag content={"Sauna"}></Tag>
            <Tag content={"Coffee"}></Tag>
            <Tag content={"Mathematical Optimization"}></Tag>
            <Tag content={"Ziro"}></Tag>
            <Tag content={"WordPress"}></Tag>
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
