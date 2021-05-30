import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function PayrollSystem() {
  const tech = ["C#", "MariaDB"];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Payroll System</h6>
          </div>
          <p className="mt-2">
            Employee payroll system capable of generating salary slips,
            calculating salaries and maintaining a list of employees and their
            financial details. The software was built for Windows systems using
            C#.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={""}>
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
