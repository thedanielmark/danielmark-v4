import FadeIn from "../FadeIn";
import Link from "next/link";

export default function ClementineOS() {
  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Clementine OS</h6>
          </div>
          <p className="mt-2">
            Clementine OS is a super light Ubuntu based Linux distribution built
            using the LFS project. Clementine OS was designed to run enterprise
            servers to power MixSpace services.
          </p>
          <h6 className="mt-4">Releases</h6>
          <div id="tech-badges">
            <Link passHref href={"https://clementineos.mixspace.xyz/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div id="tech-badges">
            <span className="badge rounded-pill bg-green">Shell</span>
            <span className="badge rounded-pill bg-green">Linux</span>
            <span className="badge rounded-pill bg-green">ESXi</span>
            <span className="badge rounded-pill bg-green">Git</span>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
