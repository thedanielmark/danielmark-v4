import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function Frecord() {
  const tech = [
    "PHP",
    "Apache",
    "Nginx",
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
            <h6 className="middle-underline d-inline">Frecord</h6>
          </div>
          <p className="mt-2">
            Website to download or print lab exercises on record sheets straight
            from the internet.
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
