import FadeIn from "../FadeIn";
import Link from "next/link";

export default function ElevateCfP() {
  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Elevate CfP</h6>
          </div>
          <p className="mt-2">
            This project contains code for the CfP portal for the Elevate
            conference by Pattarai.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://elevate.pattarai.in/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v4
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://elevate.pattarai.in//"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v5 (latest)
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">Next.js</span>
            <span className="badge rounded-pill bg-green">React</span>
            <span className="badge rounded-pill bg-green">PHP</span>
            <span className="badge rounded-pill bg-green">Apache</span>
            <span className="badge rounded-pill bg-green">Node.js</span>
            <span className="badge rounded-pill bg-green">Bootstrap</span>
            <span className="badge rounded-pill bg-green">MariaDB</span>
            <span className="badge rounded-pill bg-green">AJAX</span>
            <span className="badge rounded-pill bg-green">Axios</span>
            <span className="badge rounded-pill bg-green">SWR</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Git</span>
            <span className="badge rounded-pill bg-green">Cloudflare</span>
            <span className="badge rounded-pill bg-green">Vercel</span>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
