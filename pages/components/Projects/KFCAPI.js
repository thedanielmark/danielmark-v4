import { motion } from "framer-motion";
import Link from "next/link";

export default function KFCAPI() {
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
              KuTumba FC REST API Layer
            </h6>
          </div>
          <p className="mt-2">
            PHP based REST API layer that handles authentication, authorization
            and all other database operations for KuTumba FC.
          </p>
          <h6 className="text-grey mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={"https://api.kutumbafc.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="text-grey mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">PHP</span>
            <span className="badge rounded-pill bg-green">Cloudflare</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
