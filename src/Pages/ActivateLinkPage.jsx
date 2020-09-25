import React from "react";

export default function ActivateLinkPage({ match }) {
  const email = match.params.email;
  return (
    <div>
      <h4>Registration Complete</h4>
      <p>You have now registered your account. To activate it, please check your email:</p>
      <b>{email}</b>
    </div>
  );
}
