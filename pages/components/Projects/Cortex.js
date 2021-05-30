import FadeIn from "../FadeIn";
import Link from "next/link";

export default function Cortex() {
  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Project Cortex</h6>
          </div>
          <p className="mt-2">
            Project Cortex is the internal name for Pattarai's cloud-based ERP
            and CRM software.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={""}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">React</span>
            <span className="badge rounded-pill bg-green">PHP</span>
            <span className="badge rounded-pill bg-green">Python</span>
            <span className="badge rounded-pill bg-green">Apache</span>
            <span className="badge rounded-pill bg-green">Nginx</span>
            <span className="badge rounded-pill bg-green">Node.js</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Bootstrap</span>
            <span className="badge rounded-pill bg-green">MariaDB</span>
            <span className="badge rounded-pill bg-green">Axios</span>
            <span className="badge rounded-pill bg-green">AJAX</span>
            <span className="badge rounded-pill bg-green">SWR</span>
            <span className="badge rounded-pill bg-green">jQuery</span>
            <span className="badge rounded-pill bg-green">Docker</span>
            <span className="badge rounded-pill bg-green">Linux</span>
            <span className="badge rounded-pill bg-green">Git</span>
            <span className="badge rounded-pill bg-green">OpenStack</span>
            <span className="badge rounded-pill bg-green">Cloudflare</span>
            <span className="badge rounded-pill bg-green">Vercel</span>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
