import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "react-emotion";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3
            className={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              {node.frontmatter.title}{" "}
            </Link>
            <span
              className={css`
                color: #bbb;
              `}
            >
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
      <h2>Random Image</h2>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
