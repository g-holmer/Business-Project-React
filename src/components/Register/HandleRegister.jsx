import React from "react";
import UserKit from "../../data/UserKit";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Styles/Button";

export default function HandleRegister({
  firstName,
  lastName,
  email,
  password,
  organisationName,
  organisationKind,
}) {
  const history = useHistory();
  const userKit = new UserKit();

  function handleRegister() {
    userKit
      .register(firstName, lastName, email, password, organisationName, organisationKind)
      .then((res) => {
        if (res.ok) {
          history.push(`/activate-link/${email}`);
        }
      });
  }
  return (
    <ButtonWrapper>
      <Button onClick={handleRegister}>Register</Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;
