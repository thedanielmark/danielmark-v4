import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function BFS() {
  const tech = ["Java", "C++", "Shell", "Unix"];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">BlackHose File System</h6>
          </div>
          <p className="mt-2">
            The BlackHose File System (BFS) is a type of deniable encryption
            based file system for Unix environments. The current iteration is in
            use by Fringe Messenger to store all profile data of users.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={""}>
              <a
                className="grey-to-white text-decoration-none"
                style={{ paddingLeft: "0px" }}
              >
                v1 (latest)
              </a>
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
