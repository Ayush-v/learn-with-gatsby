import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  // return (
  //   <main>
  //     <title>Home Page</title>
  //     <h1>Welcome to my Gatsby site!</h1>
  //     <p>I'm making this by following the Gatsby Tutorial.</p>
  //     <Link to="/about">About Page</Link>
  //   </main>
  // );

  return (
    <Layout pageTitle="Home Page" pageHeading="Welcome to my Gatsby site!">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
        alt="logo"
        loading="eager"
        layout="fullWidth"
      />
      <StaticImage
        src="../images/icon.png"
        alt="logo"
        loading="lazy"
        placeholder="blurred"
      />
    </Layout>
  );
};

export default HomePage;
