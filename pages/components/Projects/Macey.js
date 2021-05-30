import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function Macey() {
  const tech = ["Ionic", "Git", "Cloudflare"];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Macey</h6>
          </div>
          <p className="mt-2">
            Macey is an Android application containing a backdoor with access to
            a chat application implemented using{" "}
            <Link href="https://www.tawk.to/" passHref>
              <a className="grey-to-white">tawk.to</a>
            </Link>{" "}
            and Cordova.
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
