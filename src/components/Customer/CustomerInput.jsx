import React from "react";
import Error from "../../Styles/Error";

export default function CustomerInput({
  name,
  orgNr,
  vatNr,
  paymentTerm,
  reference,
  website,
  email,
  phoneNumber,
  register,
  error,
  errors,
}) {
  const inputObjects = [
    ["Name", "name", "text", name, register],
    ["Org nr", "orgNr", "text", orgNr, register],
    ["VAT", "vatNr", "text", vatNr, register({ minLength: 12 })],
    ["Payment Term", "paymentTerm", "number", paymentTerm, register],
    ["Reference", "reference", "text", reference, register],
    ["Website", "website", "text", website, register],
    ["E-mail", "email", "email", email, register],
    ["Phone Number", "phoneNumber", "text", phoneNumber, register],
  ];

  const renderInput = (index, name, variable, type, value, ref) => {
    return (
      <p key={index}>
        {name}: <input name={variable} type={type} defaultValue={value} ref={ref} />
      </p>
    );
  };
  const renderInputObjects = inputObjects.map((input, index) => {
    return renderInput(index, input[0], input[1], input[2], input[3], input[4]);
  });
  return (
    <div>
      {renderInputObjects}
      {errors.vatNr && <Error>VAT nr needs a minimum characters of 12.</Error>}
      <Error>{error}</Error>
    </div>
  );
}
