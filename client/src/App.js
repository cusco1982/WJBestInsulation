import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Properties from "./pages/Properties";
import Tenants from "./pages/Tenants";
import Contacts from "./pages/Contacts";
import Admin from "./pages/Admin";
import Tenant from "./pages/Tenant";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Services from "./pages/Services";


// import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Home from './components/Home';
// import NotFound from './components/NotFound';


import "./css/style.css";

// nav scrolldown js
import "./css/index.js";
// import "./components/Footer/style.css";




export default class App extends Component {
  render() {

    return (
      <Router>
        <div>


          <Nav />

          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Main} />
              {/* <Route exact path="/properties" component={Properties} /> */}
              <Route exact path="/services" component={Services} />
              {/* <Route exact path="/Tenants" component={Tenants} /> */}
              <Route exact path="/Contact" component={Contacts} />
              {/* <Route exact path="/Admin" component={Admin} /> */}
              {/* <Route exact path="/Tenant" component={Tenant} /> */}
              {/* <Route exact path="/Register" component={Register} /> */}
              <Route exact path="/Projects" component={Projects} />
              {/* exact path = "*" component={unknown} */}

            </Switch>
          </div>

          <Footer />

        </div>
      </Router>
    )
  };
}