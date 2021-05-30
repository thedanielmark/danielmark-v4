import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function ElevateLanding() {
  const tech = [
    "Next.js",
    "React",
    "Apache",
    "Axios",
    "Bootstrap",
    "MariaDB",
    "AJAX",
    "SWR",
    "jQuery",
    "Git",
    "Cloudflare",
    "Vercel",
  ];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              Elevate Landing Website
            </h6>
          </div>
          <p className="mt-2">
            Elevate is a website for Pattarai's first global engineering
            conference on science and technology. The first iteration was built
            using Next.js but the next one was built using React.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://elevate.pattarai.in/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v1
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://elevate.pattarai.in/"}>
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
              return <Chip size="small" key={chip} label={chip} />;
            })}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
