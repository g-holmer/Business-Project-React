import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../../data/UserKit";
import { CustomerContext } from "../../contexts/CustomerContext";
import Button from "../../Styles/Button";
import styled from "styled-components";

export default function CustomerDetail({ match }) {
  const id = match.params.id;
  const index = match.params.index;

  const history = useHistory();
  const { customers, setCustomers, setReloadCustomer } = useContext(CustomerContext);

  const name = customers && customers[index].name;
  const orgNr = customers && customers[index].organisationNr;
  const vatNr = customers && customers[index].vatNr;
  const reference = customers && customers[index].reference;
  const paymentTerm = customers && customers[index].paymentTerm;
  const website = customers && customers[index].website;
  const email = customers && customers[index].email;
  const phoneNumber = customers && customers[index].phoneNumber;

  let [editName, setEditName] = useState(name);
  let [editOrgNr, setEditOrgNr] = useState(orgNr);
  let [editVatNr, setEditVatNr] = useState(vatNr);
  let [editRef, setEditRef] = useState(reference);
  let [editPaymentTerm, setEditPaymentTerm] = useState(paymentTerm);
  let [editWebsite, setEditWebsite] = useState(website);
  let [editEmail, setEditEmail] = useState(email);
  let [editPhoneNumber, setEditPhoneNumber] = useState(phoneNumber);

  const userKit = new UserKit();
  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
      });
  }

  function deleteCustomer() {
    userKit.deleteCustomer(id);
    history.push("/login");
    setReloadCustomer(true);
  }
  function editCustomer() {
    userKit.editCustomer(
      id,
      editName,
      editOrgNr,
      editVatNr,
      editRef,
      editPaymentTerm,
      editWebsite,
      editEmail,
      editPhoneNumber
    );
    history.push("/login");
    setReloadCustomer(true);
  }

  useEffect(() => {
    getCustomerList();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Button onClick={deleteCustomer}>Delete Customer</Button>
      <h1>{name}</h1>

      <p>
        Name: <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
      </p>
      <p>
        Org nr:{" "}
        <input type="text" value={editOrgNr} onChange={(e) => setEditOrgNr(e.target.value)} />
      </p>
      <p>
        VAT: <input type="text" value={editVatNr} onChange={(e) => setEditVatNr(e.target.value)} />
      </p>
      <p>
        Payment term:{" "}
        <input
          type="text"
          value={editPaymentTerm}
          onChange={(e) => setEditPaymentTerm(e.target.value)}
        />
      </p>
      <p>
        Reference:{" "}
        <input type="text" value={editRef} onChange={(e) => setEditRef(e.target.value)} />
      </p>
      <p>
        Website:{" "}
        <input type="text" value={editOrgNr} onChange={(e) => setEditWebsite(e.target.value)} />
      </p>
      <p>
        E-mail:{" "}
        <input type="text" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
      </p>
      <p>
        Phone number:{" "}
        <input
          type="text"
          value={editPhoneNumber}
          onChange={(e) => setEditPhoneNumber(e.target.value)}
        />
      </p>
      <FancyBtn onClick={editCustomer}>Update info</FancyBtn>
    </div>
  );
}
const FancyBtn = styled(Button)`
  background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
`;
