import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function MXOut() {
  const tech = ["PHP", "Apache", "Nginx", "Git", "Cloudflare"];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              MixSpace Outgoing SMTP Mail Server
            </h6>
          </div>
          <p className="mt-2">
            Outgoing SMTP mail server based on the PHPMailer library. This
            software primarily powers all outgoing mails for MixSpace as well as
            other projects.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <ul className="nav">
              <li className="nav-item">
                <Link passHref href={"https://v5.mixspace.xyz/"}>
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
