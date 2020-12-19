import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content="Cloud Computing Services | MixSpace Cloud Platform"
        />
        <meta
          name="description"
          content="Scalable compute instances, cloud storage, serverless compute environments, database hosting. Free trial available for new users. Refer a friend and earn up to 200 rupees in credit."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mixspace.xyz/" />
        <meta
          property="og:title"
          content="Cloud Computing Services | MixSpace Cloud Platform"
        />
        <meta
          property="og:description"
          content="Scalable compute instances, cloud storage, serverless compute environments, database hosting. Free trial available for new users. Refer a friend and earn up to 200 rupees in credit."
        />
        <meta property="og:image" content="../images/website-card.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mixspace.xyz/" />
        <meta
          property="twitter:title"
          content="Cloud Computing Services | MixSpace Cloud Platform"
        />
        <meta
          property="twitter:description"
          content="Scalable compute instances, cloud storage, serverless compute environments, database hosting. Free trial available for new users. Refer a friend and earn up to 200 rupees in credit."
        />
        <meta property="twitter:image" content="../images/website-card.png" />
      </Head>
      <div className="layout">{props.children}</div>
    </div>
  );
}
