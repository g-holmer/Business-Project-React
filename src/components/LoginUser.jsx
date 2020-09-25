import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../Data/UserKit";
import Button from "../Styles/Button";
import styled from "styled-components";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const userKit = new UserKit();

  const history = useHistory();
  function handleLogin() {
    userKit
      .login(email, password)
      .then((res) => res.json())
      .then((data) => {
        if (!data.token) {
          setError("Wrong email or password.");
          return;
        }
        userKit.setToken(data.token);
        history.push("/home");
      });
  }
  if (userKit.getToken()) {
    history.push("/home");
  }
  return (
    <LoginWrapper>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <Button onClick={handleLogin}>Login</Button>
      <div>{error}</div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 400px;
`;
