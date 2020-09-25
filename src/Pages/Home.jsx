import React, { useContext, useEffect } from "react";
import AddCustomerInput from "../components/Customer/AddCustomerInput";
import Customers from "../components/Customer/Customers";
import UserInfo from "../components/UserInfo";
import UserKit from "../data/UserKit";
import { CustomerContext } from "../contexts/CustomerContext";
import { UserContext } from "../contexts/UserContext";

export default function Home() {
  const { setCustomers, reloadCustomer, setReloadCustomer } = useContext(CustomerContext);
  const { setUserInfo } = useContext(UserContext);

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

  useEffect(() => {
    getUserInformation();
    getCustomerList();
    // eslint-disable-next-line
  }, [reloadCustomer]);

  return (
    <div>
      <UserInfo />
      <Customers />
      <AddCustomerInput />
    </div>
  );
}
