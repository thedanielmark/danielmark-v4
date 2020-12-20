import React from "react";
import { motion } from "framer-motion";
import Layout from "./layout";

// Components
import Home from "./components/Index/home";

export default function Work() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fade1}>
          <Home></Home>
        </motion.div>
      </motion.div>
    </Layout>
  );
}