import "@/app/ui/layouts/portfolio.css"
import Image from 'next/image'
import site_logo from "../images/top/site_logo.png";

export default function PortfolioBox({title = "Coming Soon", subTitle = "Creating now!", express = "Let's enjoy",
                image_path = site_logo, uri = "/", devLang = "---", points = "---"}){
    return (
        <div className="card">
            <div className="cardTitle">
                <a href={uri}>
                    <div className="title_box">
                        <h5 className="topTitle">{title}</h5>
                        <p className="subTitle">{subTitle}</p>
                    </div>
                    <div className="image_container h60">
                        <Image
                            aria-hidden
                            src={image_path}
                            alt={title}
                        ></Image>
                    </div>
                </a>
            </div>
            <div className="cardBody">
                <p>{express}</p>
                <p className="pSpace">【開発言語】<br/>
                {devLang}</p>
                <p className="pSpace">【工夫点】<br/>
                {points}</p>
            </div>
        </div>
    )
}