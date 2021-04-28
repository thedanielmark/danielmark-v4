import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function JailBird() {
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

  const tech = ["PHP", "Apache", "Nginx", "Shell", "Bootstrap", "MariaDB", "MongoDB", "Firestore", "AJAX", "jQuery", "Linux", "Git", "Cloudflare", "Vercel"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">JailBird</h6>
          </div>
          <p className="mt-2">
            JailBird was the user dashboard for MixSpace. Programmed a cPanel
            like interface to manage provisioning of resources and managing
            deployments. It also consisted of APIs and shell scripts to automate
            backend processes for setup and management of applications on the
            platform.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
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
