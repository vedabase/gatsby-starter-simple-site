import React from "react";
import Layout from "../components/layout"
import styled from "react-emotion";


const UserWrapper = styled.div`
display: flex;
align-items: center;
margin: 0 auto 12px auto;
&:last-child {
  margin-bottom: 0;
}
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default () => (
  <Layout>
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
  </Layout>
);