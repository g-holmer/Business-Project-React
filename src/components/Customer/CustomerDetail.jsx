import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../../data/UserKit";
import { CustomerContext } from "../../contexts/CustomerContext";
import Button from "../../Styles/Button";
import SubmitBtn from "../../Styles/InputBtn";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import CustomerInput from "./CustomerInput";
export default function CustomerDetail({ match }) {
  const id = match.params.id;
  const index = match.params.index;

  const history = useHistory();
  const { customers, setReloadCustomer } = useContext(CustomerContext);
  const [error, setError] = useState("");
  const name = customers && customers[index].name;
  const orgNr = customers && customers[index].organisationNr;
  const vatNr = customers && customers[index].vatNr;
  const reference = customers && customers[index].reference;
  const paymentTerm = customers && customers[index].paymentTerm;
  const website = customers && customers[index].website;
  const email = customers && customers[index].email;
  const phoneNumber = customers && customers[index].phoneNumber;

  const userKit = new UserKit();

  function deleteCustomer() {
    userKit.deleteCustomer(id);
    history.push("/login");
    setReloadCustomer(true);
  }

  const { register, handleSubmit, errors } = useForm();

  function editCustomer(data) {
    if (userKit.checkVatNr(data)) {
      setError("VAT needs two characters followed by 10 numbers (eg. SE1234567890)");
      return;
    }
    userKit.editCustomer(
      id,
      data.name,
      data.orgNr,
      data.vatNr,
      data.reference,
      data.paymentTerm,
      data.website,
      data.email,
      data.phoneNumber
    );
    history.push("/login");
    setReloadCustomer(true);
    setError("");
  }

  return (
    <div>
      <Button onClick={deleteCustomer}>Delete Customer</Button>
      <h1>{name}</h1>

      <form onSubmit={handleSubmit(editCustomer)}>
        <CustomerInput
          name={name}
          orgNr={orgNr}
          vatNr={vatNr}
          paymentTerm={paymentTerm}
          reference={reference}
          website={website}
          email={email}
          phoneNumber={phoneNumber}
          register={register}
          error={error}
          errors={errors}
        />
        <FancyBtn type="submit" value="Update Info" />
      </form>
    </div>
  );
}

const FancyBtn = styled(SubmitBtn)`
  box-shadow: inset 0px -3px 7px 0px #29bbff;
  background: linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
  background-color: #2dabf9;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;
  color: white;
`;
