/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

import PortfolioAtheneum from "../../assets/images/portfolios/www.atheneum.ai.png";
import PortfolioCoverDash from "../../assets/images/portfolios/www.coverdash.com.png";
import PortfolioGoCariq from "../../assets/images/portfolios/www.gocariq.com.png";
import PortfolioHolidu from "../../assets/images/portfolios/www.holidu.com.png";
import PortfolioPantryShop from "../../assets/images/portfolios/www.pantryshop.com.png";
import PortfolioSvybera from "../../assets/images/portfolios/www.svybera.com.png";
import PortfolioTsgGlobal from "../../assets/images/portfolios/www.tsgglobal.com.png";

const Experiences = () => {
  const experiencesArray = "Experiences".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={experiencesArray}
              idx={15}
            />
          </h1>
          <p>
            I closely collaborated with the product and development teams to
            improve the efficiency of the platform by 30%
          </p>
          <p>
            I built 3 reusable cross-chain libraries for Ethereum, BSC, and
            Polygon Created and Launched a decentralized social media
            application on Solana blockchain network
          </p>
          <p>
            I assisted in developing the backend that became the foundation for
            intersection between Web3 and FinTech
          </p>
          <p>
            I led and mentored 5 junior developers while participating in a open
            source community, resulting in a 50% increase in user satisfaction
          </p>
          <p>
            I developed 5 deventralized applications using Next, Tailwind CSS,
            Vite, and web3.js/Ethers for integrating Ethereum
          </p>
        </div>
        <div className="projects">
          <div className="box">
            <img src={PortfolioAtheneum} />
            <span>Atheneum Enterprise Platform</span>
          </div>
          <div className="box">
            <img src={PortfolioCoverDash} />
            <span>Coverdash</span>
          </div>
          <div className="box">
            <img src={PortfolioGoCariq} />
            <span>CarIQ</span>
          </div>
          <div className="box">
            <img src={PortfolioHolidu} />
            <span>Holidu</span>
          </div>
          <div className="box">
            <img src={PortfolioPantryShop} />
            <span>PantryShop</span>
          </div>
          <div className="box">
            <img src={PortfolioTsgGlobal} />
            <span>TSG Global Platform</span>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Experiences;
