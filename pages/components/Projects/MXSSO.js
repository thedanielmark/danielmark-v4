import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function MXSSO() {
  const tech = [
    "React",
    "PHP",
    "Apache",
    "Bootstrap",
    "MariaDB",
    "MongoDB",
    "SWR",
    "jQuery",
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
              MixSpace Single Sign-On Technology
            </h6>
          </div>
          <p className="mt-2">
            Single Sign-on technology that powers most of my enterprise and
            personal projects.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://sso.mixspace.xyz/"}>
                  <a
                    className="nav-link grey-to-white"
                    style={{ paddingLeft: "0px" }}
                  >
                    v1 (latest)
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
