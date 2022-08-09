import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Layout(props) {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fadeIn1 = {
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
    <div>
      <Head>
        <>
          <title>Daniel Mark | Developer Portfolio &amp; Personal Website</title>
          <meta name="title" content="Daniel Mark | Developer Portfolio &amp; Personal Website" />
          <meta name="description" content="Hi! I'm Daniel Mark, a software engineer based in Chennai, India. I specialize in enterprise systems programming, web development and cross-platform app development." />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://thedanielmark.com/" />
          <meta property="og:title" content="Daniel Mark | Developer Portfolio &amp; Personal Website" />
          <meta property="og:description" content="Hi! I'm Daniel Mark, a software engineer based in Chennai, India. I specialize in enterprise systems programming, web development and cross-platform app development." />
          <meta property="og:image" content="https://thedanielmark.com/meta-image.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://thedanielmark.com/" />
          <meta property="twitter:title" content="Daniel Mark | Developer Portfolio &amp; Personal Website" />
          <meta property="twitter:description" content="Hi! I'm Daniel Mark, a software engineer based in Chennai, India. I specialize in enterprise systems programming, web development and cross-platform app development." />
          <meta property="twitter:image" content="https://thedanielmark.com/meta-image.jpg" />
        </>

      </Head>
      <div
        className="d-flex align-items-center layout justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <motion.div
          exit="exit"
          initial="initial"
          animate="animate"
          className="col-12 col-md-10 col-lg-9 col-xl-4 py-5"
        >
          <motion.div variants={fadeIn1}>
            {props.children}
            <hr className="mt-4" />
            <ul className="nav ml-0">
              <li className="nav-item">
                <Link href="https://github.com/thedanielmark" passHref>
                  <a
                    className="nav-link grey-to-white"
                    target="top"
                    style={{ paddingLeft: "0px" }}
                  >
                    <i className="fab fa-github" />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://linkedin.com/in/thedanielmark" passHref>
                  <a className="nav-link grey-to-white" target="top">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://twitter.com/the_danielmark" passHref>
                  <a className="nav-link grey-to-white" target="top">
                    <i className="fab fa-twitter" />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="https://www.youtube.com/channel/UCRO3ipEkZHDnFn5mfCm2hzA"
                  passHref
                >
                  <a className="nav-link grey-to-white" target="top">
                    <i className="fab fa-youtube" />
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="mailto:hello@thedanielmark.com" passHref>
                  <a className="nav-link grey-to-white" target="top">
                    <i className="fas fa-envelope" />
                  </a>
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
