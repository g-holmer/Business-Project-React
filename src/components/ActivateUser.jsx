import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import LoginUser from "./LoginUser";
import Button from "../Styles/Button";

export default function ActivateUser({ match }) {
  let renderActivated = null;

  if (match.params.activated) {
    renderActivated = <p style={{ textAlign: "center" }}>Your account has now been activated.</p>;
  }
  const history = useHistory();
  const searchString = history.location.search;
  const urlParameters = new URLSearchParams(searchString);
  const [uid, setUid] = useState(urlParameters.get("uid"));
  const [token, setToken] = useState(urlParameters.get("token"));
  const userKit = new UserKit();

  function handleActivateUser() {
    userKit.activateUser(uid, token).then(() => {
      setUid(null);
      setToken(null);
      history.push("/login/activated");
    });
  }
  return (
    <div>
      {uid && token ? (
        <div>
          <h1>Activate Account</h1>
          <Button onClick={handleActivateUser}>Activate User</Button>
        </div>
      ) : (
        <>
          <LoginUser />
          {renderActivated}
        </>
      )}
    </div>
  );
}
