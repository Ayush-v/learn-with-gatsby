import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { bbb } from "../../components/layout.module.css";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="blog" pageHeading="Blog">
      {data.allMdx.nodes.map((node) => {
        return (
          <article key={node.id}>
            <Link to={node.slug} className={bbb}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
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
        slug
      }
    }
  }
`;

export default Blog;
