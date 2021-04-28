import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function MixSpaceCloudPlatform() {
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

  const tech = ["Next.js", "React", "PHP", "Python", "Apache", "Nginx", "Shell", "Node.js", "Bootstrap", "MariaDB", "MongoDB", "Firestore", "AJAX", "SWR", "Axios", "jQuery", "Docker", "Linux", "ESXi", "Git", "OpenStack", "Cloudflare", "Vercel"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              MixSpace Cloud Platform
            </h6>
          </div>
          <p className="mt-2">
            MixSpace is a cloud computing platform with a focus on serverless
            computing applications and JAMStack hosting.
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
                <Link passHref href={"https://mixspace.thedanielmark.com/"}>
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
                <Link passHref href={"https://v4.thedanielmark.com"}>
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
