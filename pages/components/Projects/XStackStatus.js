import { motion } from "framer-motion";
import Link from "next/link";

export default function XStackStatus() {
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
  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              xStack Platorm Status Dashboard
            </h6>
          </div>
          <p className="mt-2">
            Website to display the status of all services on the xStack Platform
            in real time. The dashboard also had an API to stream the overall
            availability of the platform to 3rd party sites.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://licet.xstack.xyz/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v4
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://licet.xstack.xyz/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v5 (latest)
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">PHP</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Bootstrap</span>
            <span className="badge rounded-pill bg-green">MariaDB</span>
            <span className="badge rounded-pill bg-green">AJAX</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Git</span>
            <span className="badge rounded-pill bg-green">Cloudflare</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
