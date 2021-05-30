import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function Flair2k19() {
  const tech = [
    "PHP",
    "Python",
    "Apache",
    "Nginx",
    "Bootstrap",
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
            <h6 className="middle-underline d-inline">Flair 2k19</h6>
          </div>
          <p className="mt-2">
            Flair 2k19 is an event website developed for a national technical
            symposium of the Information Technology programme of Loyola-ICAM
            College of Engineering and Technology.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://flair2k19/"}>
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
