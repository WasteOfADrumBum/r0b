import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaSteam,
  FaSoundcloud,
  FaStackOverflow,
  FaXbox,
  FaLaptopCode,
} from "react-icons/fa";

const SocialCarousel = () => {
  return (
    <div className="d-flex flex-row justify-content-around pl-5 pr-5 pt-3 pb-3">
      <a href="https://www.linkedin.com/in/joshuamsmall/">
        <FaLinkedinIn style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://github.com/WasteOfADrumBum">
        <FaGithub style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://www.facebook.com/WasteOfADrumBum/">
        <FaFacebookF style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://www.instagram.com/lost.between.thoughts/?hl=en">
        <FaInstagram style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://www.snapchat.com/add/wasteofadrumbum">
        <FaSnapchatGhost style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://steamcommunity.com/id/wasteofadrumbum/">
        <FaSteam style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://soundcloud.com/wasteofadrumbum">
        <FaSoundcloud style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://stackoverflow.com/users/13681415/wasteofadrumbum">
        <FaStackOverflow style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://account.xbox.com/Profile?Gamertag=Kidd%20Kaos%2069">
        <FaXbox style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
      <a href="https://www.joshuamsmall.com/">
        <FaLaptopCode style={{ fontSize: "1.5rem", color: "black" }} />
      </a>
    </div>
  );
};

export default SocialCarousel;
