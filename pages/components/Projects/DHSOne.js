import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function DHSOne() {
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
            <h6 className="middle-underline d-inline">DHS One</h6>
          </div>
          <p className="mt-2">
            DHS One is the first prototype of a symmetric key cryptographic
            system I designed and built. Fringe Messenger and the BlackBox
            project are based off of DHS One.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={"https://one.thedanielmark.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div class="tech-badges">
            <Chip size="small" label="Java" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
