import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function MXOut() {
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

  const tech = ["PHP", "Apache", "Nginx", "Git", "Cloudflare"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              MixSpace Outgoing SMTP Mail Server
            </h6>
          </div>
          <p className="mt-2">
            Outgoing SMTP mail server based on the PHPMailer library. This
            software primarily powers all outgoing mails for MixSpace as well as
            other projects.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://v5.mixspace.xyz/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v1 (latest)
                  </a>
                </Link>
              </li>
            </ul>
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
