import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export default function UserInfo() {
  const { userInfo } = useContext(UserContext);

  return (
    <div>
      <h3>User Information</h3>
      <div>First name: {Object(userInfo).firstName}</div>
      <div>Last name: {Object(userInfo).lastName}</div>
      <div>Email: {Object(userInfo).email}</div>
    </div>
  );
}
