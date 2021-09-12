import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="blog" pageHeading="Blog">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: ASC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          title
          date(formatString: "D MMMM,YYYY")
        }
        id
        body
      }
    }
  }
`;

export default Blog;
