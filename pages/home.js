import Link from "next/link";

export default function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <h4 className="d-block">Hello there! I'm Daniel Mark.</h4>
        <h5 className="d-block text-grey">
          I build enterprise systems and scalable apps.
        </h5>
        <div>
          <ul className="nav ml-0 mt-4">
            <li className="nav-item">
              <Link href={"/work"}>
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0 !important" }}
                >
                  Work
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link grey-to-white"
                target="top"
                href="https://linkedin.com/in/thedanielmark"
              >
                Personal
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link grey-to-white"
                target="top"
                href="https://twitter.com/the_danielmark"
              >
                Other fun stuff
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav ml-0 mt-4">
            <li className="nav-item">
              <a
                className="nav-link grey-to-white"
                style={{ paddingLeft: "0 !important" }}
                target="top"
                href="https://github.com/thedanielmark"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link grey-to-white"
                target="top"
                href="https://linkedin.com/in/thedanielmark"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link grey-to-white"
                target="top"
                href="https://twitter.com/the_danielmark"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
