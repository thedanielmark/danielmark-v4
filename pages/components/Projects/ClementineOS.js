import { motion } from "framer-motion";
import Link from "next/link";

export default function ClementineOS() {
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
            <h6 className="middle-underline d-inline">Clementine OS</h6>
          </div>
          <p className="mt-2">
            Clementine OS is a super light Ubuntu based Linux distribution built
            using the LFS project. Clementine OS was designed to run enterprise
            servers to power MixSpace services.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={"https://clementineos.mixspace.xyz/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">Shell</span>
            <span className="badge rounded-pill bg-green">Linux</span>
            <span className="badge rounded-pill bg-green">ESXi</span>
            <span className="badge rounded-pill bg-green">Git</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
