import React, { useContext, useEffect, useState } from "react";
import CustomerInput from "../components/Customer/CustomerInput";
import Customers from "../components/Customer/Customers";
import UserInfo from "../components/UserInfo";
import UserKit from "../data/UserKit";
import { CustomerContext } from "../contexts/CustomerContext";
import { UserContext } from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import SubmitBtn from "../Styles/InputBtn";
export default function Home() {
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = useState("");
  const { setCustomers, reloadCustomer, setReloadCustomer } = useContext(CustomerContext);
  const { setUserInfo } = useContext(UserContext);

  let name,
    orgNr,
    vatNr,
    reference,
    paymentTerm,
    website,
    email,
    phoneNumber = "";

  const userKit = new UserKit();
  function getUserInformation() {
    userKit
      .getUserInfo()
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }
  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
        setReloadCustomer(false);
      });
  }

  function addCustomer(data) {
    if (userKit.checkVatNr(data)) {
      setError("VAT needs two characters followed by 10 numbers (eg. SE1234567890)");
      return;
    }
    userKit
      .addCustomer(
        data.name,
        data.orgNr,
        data.vatNr,
        data.reference,
        data.paymentTerm,
        data.website,
        data.email,
        data.phoneNumber
      )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setReloadCustomer(true);
          setError("");
        }
      });
  }

  useEffect(() => {
    getUserInformation();
    getCustomerList();
    // eslint-disable-next-line
  }, [reloadCustomer]);

  return (
    <div>
      <UserInfo />
      <Customers />
      <hr />
      <h2>Create New Customer</h2>
      <form onSubmit={handleSubmit(addCustomer)}>
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
        <FancyBtn type="submit" value="Add Customer" />
      </form>
    </div>
  );
}
const FancyBtn = styled(SubmitBtn)`
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
`;
