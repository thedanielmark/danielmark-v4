import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function DHSOne() {
  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">DHS One</h6>
          </div>
          <p className="mt-2">
            DHS One is the first prototype of a symmetric key cryptographic
            system I designed and built. Fringe Messenger and the BlackBox
            project are based off of DHS One.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://one.thedanielmark.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div class="tech-badges">
            <Chip size="small" label="Java" />
          </div>
        </div>
      </FadeIn>
    </>
  );
}
