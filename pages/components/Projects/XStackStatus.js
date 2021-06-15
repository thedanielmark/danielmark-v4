import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function XStackStatus() {
  const tech = [
    "PHP",
    "Bootstrap",
    "MariaDB",
    "AJAX",
    "jQuery",
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
              xStack Platorm Status Dashboard
            </h6>
          </div>
          <p className="mt-2">
            Website to display the status of all services on the xStack Platform
            in real time. The dashboard also had an API to stream the overall
            availability of the platform to 3rd party sites.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://licet.xstack.xyz/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v4
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://licet.xstack.xyz/"}>
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
