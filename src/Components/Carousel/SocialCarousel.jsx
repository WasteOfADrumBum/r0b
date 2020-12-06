import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="https://www.linkedin.com/in/joshuamsmall/">
        <FaLinkedinIn style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://github.com/WasteOfADrumBum">
        <FaGithub style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://www.facebook.com/WasteOfADrumBum/">
        <FaFacebookF style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://www.instagram.com/lost.between.thoughts/?hl=en">
        <FaInstagram style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://www.snapchat.com/add/wasteofadrumbum">
        <FaSnapchatGhost style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://steamcommunity.com/id/wasteofadrumbum/">
        <FaSteam style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://soundcloud.com/wasteofadrumbum">
        <FaSoundcloud style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://stackoverflow.com/users/13681415/wasteofadrumbum">
        <FaStackOverflow style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://account.xbox.com/Profile?Gamertag=Kidd%20Kaos%2069">
        <FaXbox style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
      <Link to="https://www.joshuamsmall.com/">
        <FaLaptopCode style={{ fontSize: "1.5rem", color: "black" }} />
      </Link>
    </div>
  );
};

export default SocialCarousel;
