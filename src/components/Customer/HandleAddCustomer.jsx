import React, { useContext, useState } from "react";
import UserKit from "../../Data/UserKit";
import { CustomerContext } from "../../Contexts/CustomerContext";
import styled from "styled-components";
import Button from "../../Styles/Button";

export default function HandleAddCustomer({
  name,
  organisationNr,
  vatNr,
  reference,
  paymentTerm,
  website,
  email,
  phoneNumber,
}) {
  const { setReloadCustomer } = useContext(CustomerContext);
  const userKit = new UserKit();
  const [error, setError] = useState("");
  function handleAddCustomer() {
    let firstTwo = vatNr.substring(0, 2);
    let lastTen = vatNr.substring(2, 12);
    let isNum = /^\d+$/.test(firstTwo);
    let isNotNum = /^\d+$/.test(lastTen);

    if (vatNr.length < 12 || isNum || !isNotNum) {
      return setError("VAT needs two characters followed by 10 numbers (eg. SE1234567890)");
    }
    userKit
      .addCustomer(name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setReloadCustomer(true);
          setError("");
        }
      });
  }

  return (
    <div>
      <Error>{error}</Error>
      <FancyBtn onClick={handleAddCustomer}>Add Customer</FancyBtn>
    </div>
  );
}

const Error = styled.p`
  color: red;
`;
const FancyBtn = styled(Button)`
  background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
  background-color: #33bdef;
  text-decoration: none;
  color: white;
  text-shadow: 0px -1px 0px #5b6178;
`;
