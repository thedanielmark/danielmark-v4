import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function FringeMessenger() {
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

  const tech = ["Cordova", "PHP", "C++", "Apache", "Nginx", "Bootstrap", "MariaDB", "MongoDB", "Firestore", "AJAX", "jQuery", "Linux", "Git", "Cloudflare"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Fringe Messenger</h6>
          </div>
          <p className="mt-2">
            Fringe Messenger is an instant messaging app that makes use of a
            symmetric key cryptographic system based off of the BlackBox
            project. Theoretically, it's the only data transfer system capable
            of withstanding a Shor's algorithm based brute force attack even by
            a Quantum computer. Fringe runs on all major smartphone and desktop
            operating systems.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={""}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
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
