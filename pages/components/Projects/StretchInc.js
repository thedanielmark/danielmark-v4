import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function StretchInc() {
  const tech = [
    "PHP",
    "Python",
    "Apache",
    "Nginx",
    "Bootstrap",
    "MariaDB",
    "AJAX",
    "jQuery",
    "Docker",
    "Git",
    "Cloudflare",
  ];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Stretch Inc</h6>
          </div>
          <p className="mt-2">
            Web-based scheduling and slot booking software with Stripe
            integration for payments and a custom outgoing SMTP client for
            sending out email notifications.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://v5.mixspace.xyz/"}>
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
