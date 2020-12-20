import Head from "next/head";
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
        <title>Daniel Mark | Personal Website and Developer Portfolio</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content="Cloud Computing Services | MixSpace Cloud Platform"
        />
        <meta
          name="description"
          content="Scalable compute instances, cloud storage, serverless compute environments, database hosting. Free trial available for new users. Refer a friend and earn up to 200 rupees in credit."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mixspace.xyz/" />
        <meta
          property="og:title"
          content="Cloud Computing Services | MixSpace Cloud Platform"
        />
        <meta
          property="og:description"
          content="Scalable compute instances, cloud storage, serverless compute environments, database hosting. Free trial available for new users. Refer a friend and earn up to 200 rupees in credit."
        />
        <meta property="og:image" content="../images/website-card.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mixspace.xyz/" />
        <meta
          property="twitter:title"
          content="Cloud Computing Services | MixSpace Cloud Platform"
        />
        <meta
          property="twitter:description"
          content="Scalable compute instances, cloud storage, serverless compute environments, database hosting. Free trial available for new users. Refer a friend and earn up to 200 rupees in credit."
        />
        <meta property="twitter:image" content="../images/website-card.png" />
      </Head>
      <div
        className="d-flex justify-content-center align-items-center layout"
        style={{ minHeight: "100vh" }}
      >
        <motion.div exit="exit" initial="initial" animate="animate">
          <motion.div variants={fadeIn1}>
            <div>
              {props.children}
              <div>
                <hr className="mt-4" />
                <ul className="nav ml-0">
                  <li className="nav-item">
                    <a
                      className="nav-link grey-to-white"
                      target="top"
                      href="https://github.com/thedanielmark"
                      style={{ paddingLeft: "0px" }}
                    >
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link grey-to-white"
                      target="top"
                      href="https://linkedin.com/in/thedanielmark"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link grey-to-white"
                      target="top"
                      href="https://twitter.com/the_danielmark"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link grey-to-white"
                      target="top"
                      href="https://www.youtube.com/channel/UCRO3ipEkZHDnFn5mfCm2hzA"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link grey-to-white"
                      target="top"
                      href="mailto:hello@thedanielmark.com"
                    >
                      <i className="fas fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}