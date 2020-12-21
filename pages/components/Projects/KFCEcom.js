import React from "react";
import Link from "next/link";

export default function KFCEcom() {
  return (
    <React.Fragment>
      <hr className="mt-4" />
      <div>
        <div>
          <h6 className="middle-underline d-inline">
            KuTumba FC E-commerce Platform
          </h6>
        </div>
        <p className="mt-2">
          Bunch of personal websites and developer portfolio sites for myself,
          ranging from the maximal to super minimal design philosophy.
        </p>
        <h6 className="text-grey mt-4">Releases</h6>
        <div id="tech-badges">
          <ul className="nav">
            <li className="nav-item">
              <Link passHref href={"https://v1.thedanielmark.com/"}>
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v1
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href={"https://v2.thedanielmark.com/"}>
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v1
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href={"https://v3.thedanielmark.com/"}>
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v1
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href={"https://v4.thedanielmark.com/"}>
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v1
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href={"https://v5.thedanielmark.com/"}>
                <a
                  className="nav-link grey-to-white"
                  style={{ paddingLeft: "0px" }}
                >
                  v5 (latest)
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <h6 className="text-grey mt-4">Technologies</h6>
        <div id="tech-badges">
          <span className="badge rounded-pill bg-green">Next.js</span>
          <span className="badge rounded-pill bg-green">React</span>
          <span className="badge rounded-pill bg-green">PHP</span>
        </div>
      </div>
    </React.Fragment>
  );
}
