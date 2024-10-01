import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Tag from "@/app/ui/tag";
import PortfolioBox from "@/app/ui/portfolio_box";
import site_logo from "./images/top/site_logo.png";
import saunaTankentai from "./images/saunaTankentai.png";
import { Lora, Qwitcher_Grypen } from "next/font/google";

const QwitcherGrypen = Qwitcher_Grypen({
  weight: "700",
  subsets: ["latin"],
});
const lora = Lora({
  weight: "600",
  subsets: ["latin"],
});

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
        
        <section className={styles.firstSection}>
          <div className={styles.scrollbox}>
            <p className={`${styles.big_title} ${QwitcherGrypen.className}`}>
              My Mission Is To<br/>
              Deliver Excitement
            </p>
          </div>

        </section>
        <div className={styles.scrollbox}>
          <div className="h-1/6 flex justify-center items-center">
            <h1 className="text-5xl text-white"><span className={lora.className}>Portfolio</span></h1>
          </div>
          <div className="h-5/6 flex justify-center">
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
            <h1 className={styles.expressTitle}><span className={lora.className}>About me</span></h1>
          </div>
          <div className={styles.expressBox}>
            <div className={styles.express}>
              <p>
              私はCS専攻の大学生です。大学入学と同時にプログラミングを始め、その面白さに魅了されました。
              その後、積極的に勉強をし大学2年生のときに応用情報技術者試験に合格しました。他にも数学技能検定準1級
              、統計検定2級、TOEIC790などを保有しています。
              </p>
              <p>
              これに加えて、Webアプリケーション開発にも力を入れています。フロントエンド、バックエンドからインフラ周り
              までフルスタックに開発しています。最近はUIのことについて学んでいます。
              </p>
              <p>
              これまでに培った幅広い知識と実践的なスキルを活かし、社会にワクワクを届けます。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <h1 className="text-3xl pl-5 mb-7 ms-12 border-yellow-300 border-l-8"><span className={lora.className}>Keyword</span></h1>
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
        <div className={styles.contentBox}>
          <div className={styles.col}>
            <h6 className="mb-3">BLOG</h6>
            <a
              href="https://hitori-times.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Image
                aria-hidden
                src="https://nextjs.org/icons/globe.svg"
                alt="@"
                width={16}
                height={16}
              />
              ひとりの時間
            </a>
          </div>
          <div className={styles.col}>
            <h6 className="mb-3">SERVICE</h6>
            <a
              href="https://sauna-tankentai.daiki-portfolio.site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src={saunaTankentai}
                alt="@"
                height={23}
              />
            </a>
          </div>
          <div className={styles.col}>
            <h6 className="mb-3">CONTACT</h6>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <Image
                aria-hidden
                src={site_logo}
                alt="@"
                height={16}
              />
              Contact Me
            </a>
          </div>
        </div>
        <div className={styles.copyrightBox}>
          <p>© daiki-portfolio.site</p>
        </div>
      </footer>
    </div>
  );
}
