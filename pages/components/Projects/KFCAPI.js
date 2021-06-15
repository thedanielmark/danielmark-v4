import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function KFCAPI() {
  const tech = ["PHP", "Cloudflare"];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              KuTumba FC REST API Layer
            </h6>
          </div>
          <p className="mt-2">
            PHP based REST API layer that handles authentication, authorization
            and all other database operations for KuTumba FC.
          </p>
          {/* <h6 className="text-grey mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://api.kutumbafc.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="text-grey mt-4">Technologies</h6>
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
