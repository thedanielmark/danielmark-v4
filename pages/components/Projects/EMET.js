import { motion } from "framer-motion";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function EMET() {
  const tech = [
    "PHP",
    "Python",
    "Apache",
    "Nginx",
    "Bootstrap",
    "MariaDB",
    "MongoDB",
    "AJAX",
    "SWR",
    "jQuery",
    "Linux",
    "Git",
    "Cloudflare",
  ];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              The Eidetic Memory Enhancement Tool (EMET)
            </h6>
          </div>
          <p className="mt-2">
            EMET is a headless CMS with cron based APIs that scrape and collect
            data from various sources. The data stored can be accessed via REST
            APIs or a web app running a speech recognition engine.
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
              return <Chip size="small" key={chip} label={chip} />;
            })}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
