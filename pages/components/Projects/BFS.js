import { motion } from "framer-motion";
import Link from "next/link";

export default function BFS() {
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
            <h6 className="middle-underline d-inline">BlackHose File System</h6>
          </div>
          <p className="mt-2">
            The BlackHose File System (BFS) is a type of deniable encryption
            based file system for Unix environments. The current iteration is in
            use by Fringe Messenger to store all profile data of users.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={""}>
              <a
                className="grey-to-white text-decoration-none"
                style={{ paddingLeft: "0px" }}
              >
                v1 (latest)
              </a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">Java</span>
            <span className="badge rounded-pill bg-green">C++</span>
            <span className="badge rounded-pill bg-green">Shell</span>
            <span className="badge rounded-pill bg-green">Unix</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
