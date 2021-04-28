import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KFCEcom() {
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
              KuTumba FC E-commerce Platform
          </h6>
          </div>
          <p className="mt-2">
            E-commerce platform with monthly recurring payments made possible by a
            Razorpay integration to sell merchandise for KuTumba FC.
        </p>
          <h6 className="text-grey mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={"https://v5.thedanielmark.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="text-grey mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">React</span>
            <span className="badge rounded-pill bg-green">PHP</span>
            <span className="badge rounded-pill bg-green">Razorpay</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Bootstrap</span>
            <span className="badge rounded-pill bg-green">Axios</span>
            <span className="badge rounded-pill bg-green">SWR</span>
            <span className="badge rounded-pill bg-green">Cloudflare</span>
            <span className="badge rounded-pill bg-green">Vercel</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">MariaDB</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
