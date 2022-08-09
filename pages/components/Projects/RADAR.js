import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function RADAR() {
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
              Radio Detection And Ranging System (RADAR)
            </h6>
          </div>
          <p className="mt-2">
            Built a 1/26 scale model of a RADAR using an infrasonic sensor that
            could detect objects in front of it and project the signals to a
            graph on a computer running a Processing GUI.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://ghostdetector.thedanielmark.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div class="tech-badges">
            <Chip size="small" label="Arduino" />
            <Chip size="small" label="Processing" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
