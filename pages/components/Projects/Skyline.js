import { motion } from "framer-motion";
import Link from "next/link";

export default function Skyline() {
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
            <h6 className="middle-underline d-inline">Skyline</h6>
          </div>
          <p className="mt-2">
            Skyline was a social media site like Twitter where users could make
            posts, interact with other users and add them as friends as well as
            upload media content.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={""}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">PHP</span>
            <span className="badge rounded-pill bg-green">Apache</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Bootstrap</span>
            <span className="badge rounded-pill bg-green">MariaDB</span>
            <span className="badge rounded-pill bg-green">AJAX</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}