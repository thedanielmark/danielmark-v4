import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function DM() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  const tech = ["Next.js", "React", "PHP", "Axios", "Bootstrap", "MariaDB", "AJAX", "jQuery"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Daniel Mark</h6>
          </div>
          <p className="mt-2">
            Bunch of personal websites and developer portfolio sites for myself,
            ranging from the maximal to super minimal design philosophy.
            </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v1
                </a>
              </li>
              <li className="nav-item">
                <Link
                  passHref
                  href="https://github.com/thedanielmark/dannyWebsiteNew"
                >
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://v1.thedanielmark.com"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fas fa-globe-asia"></i>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v2
                </a>
              </li>
              <li className="nav-item">
                <Link
                  passHref
                  href={"https://github.com/thedanielmark/danielmark-grey"}
                >
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://v2.thedanielmark.com"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fas fa-globe-asia"></i>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v3
                </a>
              </li>
              <li className="nav-item">
                <Link
                  passHref
                  href={"https://github.com/thedanielmark/daniel-mark-dark"}
                >
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://v3.thedanielmark.com"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fas fa-globe-asia"></i>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v4
                </a>
              </li>
              <li className="nav-item">
                <Link
                  passHref
                  href={"https://github.com/thedanielmark/danielmark-v4"}
                >
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://thedanielmark.com"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fas fa-globe-asia"></i>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  (latest)
                </a>
              </li>
            </ul>
            {/* <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v5
                </a>
              </li>
              <li className="nav-item">
                <Link
                  passHref
                  href={"https://github.com/thedanielmark/calculator"}
                >
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://v5.thedanielmark.com"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class="fas fa-globe-asia"></i>
                  </a>
                </Link>
              </li>
            </ul> */}
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
