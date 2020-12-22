import { motion } from "framer-motion";
import Link from "next/link";

export default function XStackHub() {
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
            <h6 className="middle-underline d-inline">xStack Hub</h6>
          </div>
          <p className="mt-2">
            xStack Hub is a custom CI/CD Pipeline built to integrate several
            sub-modules from GitHub into a single repo. It can build and deploy
            software to a web app instance using KUDU deployment scripts over
            the Azure DevOps server. APIs from GitHub and a browser-based
            terminal were also incorporated for continuous visual feedback while
            running deployment builds.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={"https://v5.mixspace.xyz/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">PHP</span>
            <span className="badge rounded-pill bg-green">Python</span>
            <span className="badge rounded-pill bg-green">Apache</span>
            <span className="badge rounded-pill bg-green">Shell</span>
            <span className="badge rounded-pill bg-green">Node.js</span>
            <span className="badge rounded-pill bg-green">MariaDB</span>
            <span className="badge rounded-pill bg-green">KUDU</span>
            <span className="badge rounded-pill bg-green">AJAX</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Linux</span>
            <span className="badge rounded-pill bg-green">Git</span>
            <span className="badge rounded-pill bg-green">Cloudflare</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}