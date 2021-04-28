import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function StretchInc() {
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

  const tech = ["PHP", "Python", "Apache", "Nginx", "Bootstrap", "MariaDB", "AJAX", "jQuery", "Docker", "Git", "Cloudflare"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Stretch Inc</h6>
          </div>
          <p className="mt-2">
            Web-based scheduling and slot booking software with Stripe
            integration for payments and a custom outgoing SMTP client for
            sending out email notifications.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://v5.mixspace.xyz/"}>
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
