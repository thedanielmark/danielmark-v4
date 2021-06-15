import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function XStackPlatform() {
  const tech = [
    "PHP",
    "Python",
    "Dart",
    "Flutter",
    "Apache",
    "Nginx",
    "Shell",
    "Node.js",
    "Bootstrap",
    "MariaDB",
    "MongoDB",
    "Firestore",
    "AJAX",
    "jQuery",
    "Docker",
    "Linux",
    "Git",
    "OpenStack",
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
              xStack Enterprise Resource Planning Platform
            </h6>
          </div>
          <p className="mt-2">
            The xStack Platform is an enterprise resource planning software for
            educational instituions comprising of various modules including the
            IoT domain.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://xstack.azurewebsites.net/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v1
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://xstack.azurewebsites.net/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v2
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link passHref href={"https://xstackhub.azurewebsites.net/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v3 (latest)
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
