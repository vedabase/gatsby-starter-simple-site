import React from "react";
import { Link } from "gatsby";
import styles from "./navigation-menu.module.css";

const MenuItem = props => (
    <Link className={styles.menuItem} activeClassName={styles.active} to={props.to}>
      {props.name}
    </Link>
);

export default () => (
  <div>
    <MenuItem to="/" name="Home" />
    <MenuItem to="/about/" name="About"/>
    <MenuItem to="/contact/" name="Contact"/>
  </div>
);
