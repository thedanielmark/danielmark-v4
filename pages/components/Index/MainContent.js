import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <h4 className="d-block">Hello there! I'm Daniel Mark.</h4>
      <h5 className="d-block text-grey">
        I build enterprise systems and scalable apps.
      </h5>
      <div>
        <ul className="nav mt-3">
          <li className="nav-item">
            <Link href="/about">
              <a
                className="nav-link grey-to-white"
                style={{ paddingLeft: "0px" }}
              >
                <span className="middle-underline">About</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects">
              <a className="nav-link grey-to-white">
                <span className="middle-underline">Projects</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link grey-to-white">
                <span className="middle-underline">Contact</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
