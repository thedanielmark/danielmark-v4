import { motion } from "framer-motion";
import Link from "next/link";
import Chip from '@material-ui/core/Chip';

export default function SIH() {
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

  const tech = ["PHP", "Bootstrap", "jQuery", "Git", "Cloudflare", "Vercel"];

  return (
    <motion.div exit="exit" initial="initial" animate="animate">
      <motion.div variants={fadeIn}>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Smart India Hackathon</h6>
          </div>
          <p className="mt-2">
            Website to showcase an inventory management system designed for the
            Airports Authority of India (AAI).
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://sih.thedanielmark.com/"}>
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
