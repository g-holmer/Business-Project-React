import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import RegisterInput from "./Components/Register/RegisterInput";
import ActivateUser from "./Components/ActivateUser";
import Logout from "./Components/LogoutUser";
import CustomerDetail from "./Components/Customer/CustomerDetail";
import Home from "./Pages/Home";
import { CustomerContext } from "./Contexts/CustomerContext";
import { UserContext } from "./Contexts/UserContext";
import Layout from "./Components/Layout/Layout";
import ActivateLinkPage from "./Pages/ActivateLinkPage";
function App() {
  const [customers, setCustomers] = useState(0);
  const [reloadCustomer, setReloadCustomer] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  return (
    <Layout>
      <h1>Business Project</h1>
      <CustomerContext.Provider
        value={{ customers, setCustomers, reloadCustomer, setReloadCustomer }}
      >
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
          <Switch>
            <Route path="/" exact component={RegisterInput} />
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={ActivateUser} />
            <Route path="/login/:activated" exact component={ActivateUser} />
            <Route path="/activate-link/:email" exact component={ActivateLinkPage} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/home/customer/:index/:id" exact component={CustomerDetail} />
          </Switch>
        </UserContext.Provider>
      </CustomerContext.Provider>
    </Layout>
  );
}

export default App;
