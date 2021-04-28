import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function Calc() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easing,
      },
    },
  };

  const tech = ["Dart", "Swift", "Kotlin", "Objective-C"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Android Calculator</h6>
          </div>
          <p className="mt-2">
            A simple cross-platform calculator app built using Dart. Only the
            Android platform was targeted by this project.
          </p>
          <h6 className="mt-4 mb-3">Releases</h6>
          <div id="tech-badges">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link grey-to-white" style={{ paddingLeft: "0px" }}>v1</a>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://github.com/thedanielmark/calculator"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://github.com/thedanielmark/calculator/blob/master/calculator.apk"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fas fa-download"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div class="tech-badges">
            {tech.map((chip) => {
              return (
                <Chip size="small" key={chip} label={chip} />
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
