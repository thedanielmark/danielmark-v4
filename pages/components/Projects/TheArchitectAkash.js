import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function TheArchitectAkash() {
  const tech = [
    "React",
    "PHP",
    "Bootstrap",
    "MariaDB",
    "AJAX",
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
            <h6 className="middle-underline d-inline">The Architect Akash</h6>
          </div>
          <p className="mt-2">
            Personal website and architecture portfolio of{" "}
            <Link href={"https://thearchitectakash.com"} passHref>
              <a className="grey-to-white">Akash.</a>
            </Link>
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://thearchitectakash.com"}>
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
