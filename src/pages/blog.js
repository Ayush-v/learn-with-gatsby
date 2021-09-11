import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="blog" pageHeading="Blog">
      <ul>
        {data.allFile.nodes.map((node) => {
          return <li key={node.name}>{node.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
