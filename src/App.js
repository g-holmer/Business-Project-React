import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import RegisterInput from "./components/Register/RegisterInput";
import ActivateUser from "./components/ActivateUser";
import Logout from "./components/LogoutUser";
import CustomerDetail from "./components/Customer/CustomerDetail";
import Home from "./Pages/Home";
import { UserContext } from "./contexts/UserContext";
import Layout from "./components/Layout/Layout";
import ActivateLinkPage from "./Pages/ActivateLinkPage";
import GetCustomerList from "./components/Customer/GetCustomerList";
function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <Layout>
      <h1>Business Project</h1>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <GetCustomerList>
          <Route path="/home" exact component={Home} />
          <Route path="/home/customer/:index/:id" exact component={CustomerDetail} />
        </GetCustomerList>
        <Switch>
          <Route path="/" exact component={RegisterInput} />
          <Route path="/login" exact component={ActivateUser} />
          <Route path="/login/:activated" exact component={ActivateUser} />
          <Route path="/activate-link/:email" exact component={ActivateLinkPage} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </UserContext.Provider>
    </Layout>
  );
}

export default App;
