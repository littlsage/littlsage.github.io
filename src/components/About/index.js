/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faHive,
  faEthereum,
  faVuejs,
  faRust,
  faNodeJs,
  faJira,
  faSwift
} from '@fortawesome/free-brands-svg-icons'
import {
  faBrain,
  faCoins
} from "@fortawesome/free-solid-svg-icons";
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            As a full-stack engineer, I have been collaborating with a variety
            of companies including small startups and big communities, which has
            made my intimately familiar with all the stages of the web lifecycle
            from the initial architecture to final deployment.
          </p>
          <p>
            Recently, I have worked on several cryptocurrency projects piling up
            great knowledge on blockchain tech.
          </p>
          <p>
            I am also not new to the remote freelancing scene, so I am
            extremely flexible with my working hours.
          </p>
          <p>
            If I need to define myself in one sentence that would be an Elegance, and Splendor!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSwift} color="#f84919" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJira} color="#285dfe" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#00bf46" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faRust} color="#585858" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
