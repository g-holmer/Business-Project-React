import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserKit from "../../Data/UserKit";

export default function Navigation() {
  const userKit = new UserKit();
  const toggleNavigation = userKit.getToken() ? (
    <ul>
      <li>
        <Link to="/home">HOME</Link>
      </li>

      <li>
        <Link to="/logout">LOGOUT</Link>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Link to="/">REGISTER</Link>
      </li>
      <li>
        <Link to="/login">LOGIN</Link>
      </li>
    </ul>
  );

  return <Nav>{toggleNavigation}</Nav>;
}

const Nav = styled.nav`
  ul {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: inherit;
    }
    a:hover {
      color: lightgray;
    }
  }
`;
