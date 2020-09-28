import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { CustomerContext } from "../../contexts/CustomerContext";
export default function Customers() {
  const { customers } = useContext(CustomerContext);
  return (
    <div>
      <h2>Customers</h2>

      {customers && customers.length ? (
        customers.map((customer, index) => {
          return (
            <div key={index}>
              <Link to={`/home/customer/${index}/${customer.id}`}>{customer.name}</Link>
            </div>
          );
        })
      ) : (
        <h3>You don't have any customers.</h3>
      )}
    </div>
  );
}
