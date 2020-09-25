import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import RegisterInput from "./components/Register/RegisterInput";
import ActivateUser from "./components/ActivateUser";
import Logout from "./components/LogoutUser";
import CustomerDetail from "./components/Customer/CustomerDetail";
import Home from "./Pages/Home";
import { CustomerContext } from "./contexts/CustomerContext";
import { UserContext } from "./contexts/UserContext";
import Layout from "./components/Layout/Layout";
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
