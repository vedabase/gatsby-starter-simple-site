import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin-left: 1rem;
  &:first-child {
    margin-left: 0;
  }
  &.active {
    color: red;
  }
`;

const MenuItem = props => (
  <StyledLink
    activeClassName="active"
    to={props.to}
  >
    {props.name}
  </StyledLink>
);

export default () => (
  <div>
    <MenuItem to="/" name="Home" />
    <MenuItem to="/about/" name="About" />
    <MenuItem to="/contact/" name="Contact" />
  </div>
);
