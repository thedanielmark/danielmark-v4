import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function XStackHub() {
  const tech = [
    "PHP",
    "Python",
    "Apache",
    "Shell",
    "Node.js",
    "MariaDB",
    "AJAX",
    "jQuery",
    "Linux",
    "Git",
    "Cloudflare",
  ];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">xStack Hub</h6>
          </div>
          <p className="mt-2">
            xStack Hub is a custom CI/CD Pipeline built to integrate several
            sub-modules from GitHub into a single repo. It can build and deploy
            software to a web app instance using KUDU deployment scripts over
            the Azure DevOps server. APIs from GitHub and a browser-based
            terminal were also incorporated for continuous visual feedback while
            running deployment builds.
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
