import * as React from "react";
import Layout from "../components/layout";

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
      I'm making this by following the Gatsby Tutorial.
    </Layout>
  );
};

export default HomePage;
