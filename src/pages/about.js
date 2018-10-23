import React from "react";
import Header from "../components/header";
import NavigationMenu from "../components/navigation-menu";
import Container from "../components/container";
import styles from "./about.module.css";

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default () => (
  <Container>
    <Header headerText="About Gatsby" />
    <NavigationMenu />
    <p>Hare Krishna Hare Rama</p>
    <User
      username="Nitai Gaura"
      avatar="https://source.unsplash.com/random/400x200"
      excerpt="I'm Nitai gaura. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Gaura Nitai"
      avatar="https://source.unsplash.com/random/400x200"
      excerpt="I'm Gaura Nitai. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
);
