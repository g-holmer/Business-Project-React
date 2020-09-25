import React, { useContext, useEffect } from "react";
import AddCustomerInput from "../Components/Customer/AddCustomerInput";
import Customers from "../Components/Customer/Customers";
import UserInfo from "../Components/UserInfo";
import UserKit from "../Data/UserKit";
import { CustomerContext } from "../Contexts/CustomerContext";
import { UserContext } from "../Contexts/UserContext";

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
