import React from "react";
import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function KFCEcom() {
  const tech = [
    "React",
    "PHP",
    "Axios",
    "Bootstrap",
    "MariaDB",
    "jQuery",
    "Cloudflare",
    "Vercel",
  ];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">
              KuTumba FC E-commerce Platform
            </h6>
          </div>
          <p className="mt-2">
            E-commerce platform with monthly recurring payments made possible by
            a Razorpay integration to sell merchandise for KuTumba FC.
          </p>
          {/* <h6 className="text-grey mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={"https://v5.thedanielmark.com/"}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="text-grey mt-4">Technologies</h6>
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
