import React, { useState, useEffect } from "react";
import UserKit from "../../data/UserKit";
import { CustomerContext } from "../../contexts/CustomerContext";

export default function GetCustomerList({ children }) {
  const [customers, setCustomers] = useState(null);
  const [reloadCustomer, setReloadCustomer] = useState(false);

  const userKit = new UserKit();

  function getCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.results);
        setReloadCustomer(false);
      });
  }

  useEffect(() => {
    getCustomerList();
    // eslint-disable-next-line
  }, [reloadCustomer]);

  return (
    <CustomerContext.Provider
      value={{ customers, setCustomers, reloadCustomer, setReloadCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
