import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostPage = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageHeading="Da Blog" pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Credit:
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          target="_blank"
          rel="noreferrer"
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <Link to="/blog">
        <h6>back</h6>
      </Link>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.78
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
      body
    }
  }
`;

export default BlogPostPage;
