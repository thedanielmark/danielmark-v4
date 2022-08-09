import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function WE() {
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

  const tech = ["Cordova", "PHP", "Apache", "Nginx", "Bootstrap", "MariaDB", "MongoDB", "Firestore", "AJAX", "jQuery", "Git", "Cloudflare"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              We're Everywhere! (WE!)
            </h6>
          </div>
          <p className="mt-2">
            WE! is a personal safety app heavily inspired by Uber. It logged
            user's locations in a spatial database and with the press of a
            button, could send out an SMS notification to the 100 nearest people
            calling for help when a user is under duress.
          </p>
          <ul className="text-grey">
            <li>Proxy calling the victim via Exotel owned virtual phone.</li>
            <li>Real time victim status notifications.</li>
            <li>In-app evidence upload and tracking portal.</li>
            <li>Automated SMS triggers.</li>
          </ul>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://v4.mixspace.xyz/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v1
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://v5.mixspace.xyz/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v2 (latest)
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
