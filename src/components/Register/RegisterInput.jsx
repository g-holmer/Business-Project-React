import React from "react";
import { useState } from "react";
import styled from "styled-components";
import HandleRegister from "./HandleRegister";
export default function RegisterInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  function renderInput(index, placeholder, stateVariable, stateSetVariable, type) {
    return (
      <InputItem key={index}>
        <input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => stateSetVariable(e.target.value)}
          type={type}
        />
      </InputItem>
    );
  }
  const inputObjects = [
    ["First name", firstName, setFirstName],
    ["Last name", lastName, setLastName],
    ["Email", email, setEmail, "email"],
    ["Password", password, setPassword, "password"],
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0, 1, 2)", organisationKind, setOrganisationKind],
  ];
  const renderInputObjects = inputObjects.map((input, index) => {
    return renderInput(index, input[0], input[1], input[2], input[3]);
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Register</h2>
      <p>Enter details to register</p>
      <InputWrapper>{renderInputObjects}</InputWrapper>
      <HandleRegister
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        organisationName={organisationName}
        organisationKind={organisationKind}
      />
    </div>
  );
}

const InputItem = styled.div`
  margin: 5px;
  max-width: 500px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
