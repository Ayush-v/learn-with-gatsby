import * as React from "react";
import Layout from "../components/layout";

const About = () => {
  // return (
  //   <div>
  //     <title>About Page</title>
  //     <h1>This is the about page.</h1>
  //     <Link to="/">Home Page</Link>
  //   </div>
  // );

  return (
    <Layout pageTitle="About Page" pageHeading="This is the about page.">
      About me: I am about to be a pro gatsby devs!
    </Layout>
  );
};

export default About;
