export default function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <h4 className="d-block">Hello. I'm Daniel Mark.</h4>
        <h5 className="d-block text-grey">
          You are now looking at a website hosted over the cloud.
        </h5>
        <ul className="nav ml-0">
          <li className="nav-item">
            <a
              className="nav-link grey-to-white"
              style={{ paddingLeft: "0 !important" }}
              target="top"
              href="https://github.com/thedanielmark"
            >
              <i className="fab fa-github text-grey" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link grey-to-white"
              target="top"
              href="https://linkedin.com/in/thedanielmark"
            >
              <i className="fab fa-linkedin-in text-grey" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link grey-to-white"
              target="top"
              href="https://twitter.com/the_danielmark"
            >
              <i className="fab fa-twitter text-grey" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
