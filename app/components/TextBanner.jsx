"use client";
import Styles from "../../styles/rss.css";

function TextBanner(props) {
  return (
    <div id="rssBlock" className="h-40 flex items-center">
      <p class="cnnContents">
        <span class="marqueeStyle whitespace-nowrap text-wh2 font-tyk text-orangebase"> {props.text} </span>

        <span class="marqueeStyle2 whitespace-nowrap text-wh2 font-tyk text-orangebase"> {props.text} </span>
      </p>
    </div>
  );
}

export default TextBanner;
