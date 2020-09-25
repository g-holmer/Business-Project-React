import React, { useEffect } from "react";
import UserKit from "../data/UserKit";
import { useHistory } from "react-router-dom";

export default function LogoutUser() {
  const userKit = new UserKit();
  const history = useHistory();
  useEffect(() => {
    userKit.clearLocalStorage();
    window.location.reload();
    history.push("/login");
    // eslint-disable-next-line
  }, []);
  return <div></div>;
}
