import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import styled, { css } from "react-emotion";
import { rhythm } from "../utils/typography";

const StyledLink = styled(Link)`
  margin-left: 1rem;
  float: right;
  &:first-child {
    margin-left: 0;
  }
  &.active {
    color: red;
  }
`;

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <StyledLink to={props.to} activeClassName="active">
      {props.children}
    </StyledLink>
  </li>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        className={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(1)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3
              className={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul>
        </header>
        {children}
        <footer style={{ textAlign: `center` }}>--- This is footer ---</footer>
      </div>
    )}
  />
);
