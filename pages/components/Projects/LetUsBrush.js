import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function LetUsBrush() {
  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Let Us Brush!</h6>
          </div>
          <p className="mt-2">
            Simple Android applciation with a dental slideshow implemented using
            the Swiper library.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={""}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div class="tech-badges">
            <Chip size="small" label="Cordova" />
            <Chip size="small" label="Swiper" />
          </div>
        </div>
      </FadeIn>
    </>
  );
}
