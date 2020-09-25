import React, { useState } from "react";
import HandleAddCustomer from "./HandleAddCustomer";
export default function AddCustomerInput() {
  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState("");
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function renderInput(index, placeholder, stateVariable, stateSetVariable) {
    return (
      <div key={index}>
        <label>{placeholder}: </label>
        <input
          placeholder={placeholder}
          value={stateVariable}
          onChange={(e) => stateSetVariable(e.target.value)}
        />
      </div>
    );
  }

  const inputObjects = [
    ["Name", name, setName],
    ["Org Nr", organisationNr, setOrganisationNr],
    ["VAT", vatNr, setVatNr],
    ["Reference", reference, setReference],
    ["Payment Term", paymentTerm, setPaymentTerm],
    ["Website", website, setWebsite],
    ["E-mail", email, setEmail],
    ["Phone Number", phoneNumber, setPhoneNumber],
  ];
  const renderInputObjects = inputObjects.map((input, index) => {
    return renderInput(index, input[0], input[1], input[2]);
  });

  return (
    <div>
      <hr />
      <h2>Create New Customer</h2>
      {renderInputObjects}
      <HandleAddCustomer
        name={name}
        organisationNr={organisationNr}
        vatNr={vatNr}
        reference={reference}
        paymentTerm={paymentTerm}
        website={website}
        email={email}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}
