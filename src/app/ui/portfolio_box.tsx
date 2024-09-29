import "@/app/ui/layouts/portfolio.css"
import Image from 'next/image'
import site_logo from "../images/top/site_logo.png";

export default function PortfolioBox({title = "Coming Soon", subTitle = "Creating now!", express = "Let's enjoy",
                image_path = site_logo, uri = "/", devLang = "---", points = "---"}){
    return (
        <div className="card">
            <div className="cardTitle">
                <a href={uri}>
                    <h5 className="topTitle">{title}</h5>
                    <p className="subTitle">{subTitle}</p>
                    <Image
                        aria-hidden
                        src={image_path}
                        alt={title}
                    ></Image>
                </a>
            </div>
            <div className="cardBody">
                <p>{express}</p>
                <p>【開発言語】<br/>
                {devLang}</p>
                <p>【工夫点】<br/>
                {points}</p>
            </div>
        </div>
    )
}