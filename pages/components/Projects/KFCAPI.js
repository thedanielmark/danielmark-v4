import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

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

  const tech = ["PHP", "Cloudflare"];

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
          {/* <h6 className="text-grey mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://api.kutumbafc.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="text-grey mt-4">Technologies</h6>
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
