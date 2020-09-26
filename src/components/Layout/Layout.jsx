import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  );
}
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  border-bottom: 0.5px solid black;
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    height: 27px;
    width: 150px;
    background-color: white;
    border: 1px solid black;
    border-radius: 3px;
    padding-left: 8px;
  }
`;
