"use client";
import Styles from "../../styles/rss.css";

function TextBanner(props) {
  return (
    <div id="rssBlock" className="flex h-40 items-center">
      <p className="cnnContents">
        <span className="marqueeStyle whitespace-nowrap font-tyk text-wh2 text-orangebase"> {props.text} </span>

        <span className="marqueeStyle2 whitespace-nowrap font-tyk text-wh2 text-orangebase"> {props.text} </span>
      </p>
    </div>
  );
}

export default TextBanner;
