import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-end w-100 mb-3">
        <Link href={"/"} passHref>
          <a className="grey-to-white text-decoration-none d-flex align-items-baseline">
            <i className="far fa-times-circle h1"></i>
          </a>
        </Link>
      </div>
      <h4 className="d-block">A little introduction about myself</h4>
      <p className="d-block py-3">
        I love building complex apps that need to massively scale. My expertise
        primarily lies in building enterprise applications on the cloud and
        architecting SaaS applications. Some of my previous stints include{" "}
        <a className="text-decoration-none" href="https://mixspace.xyz">
          MixSpace Cloud
        </a>
        ,{" "}
        <a className="text-decoration-none" href="https://pattarai.in">
          Pattarai
        </a>{" "}
        and{" "}
        <a className="text-decoration-none" href="https://stratforge.com">
          Stratforge
        </a>
        . I'm currently working in stealth on a SaaS product in the marketing
        and advertising technology segment.
      </p>
      {/* <h4 className="d-block mt-5 mb-4">Core Competencies</h4>
      <h6>🖥️ Languages</h6>
      <p className="text-grey">
        JavaScript (ES5 &amp; ES6), HTML5, CSS3/SASS, PHP &amp; Python.
      </p>
      <h6 className="mt-4">⚡ Frameworks/Libraries</h6>
      <p className="text-grey">
        React.js, Next.js, Gatsby, jQuery, Bootstrap, Tailwind CSS, Electron,
        Ionic, Cordova, Semantic UI, styled components.
      </p>
      <h6 className="mt-4">💾 Databases</h6>
      <p className="text-grey">
        MariaDB, MySQL, PostgreSQL, MongoDB, SQLite, Firestore, Oracle Database.
      </p>
      <h6 className="mt-4">🛠️ Tools</h6>
      <p className="text-grey">
        Postman, RESTful APIs, AJAX, Axios, SWR, JSX, Git, GitHub, Jira, npm,
        Cloudflare, Netlify, Vercel, GitHub Actions, Ansible, Ubuntu/Debian
        &amp; CentOS/Fedora.
      </p>
      <h6 className="mt-4">🕶️ Other Cool Stuff</h6>
      <p className="text-grey">
        JAMstack, Object Oriented Programming, Wireframing, Test-Driven
        Development, Responsive Design, Authentication, Agile Development/Scrum,
        the command line.
      </p> */}
      <p className="mt-5">
        Take a look at my work by logging onto{" "}
        <a
          href="https://github.com/thedanielmark"
          className="text-white text-decoration-none"
        >
          github.com/thedanielmark
        </a>
      </p>
    </React.Fragment>
  );
}
