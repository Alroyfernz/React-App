import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <Router>
    
  
    <Switch>
      <Route path="/" component={Home} exact/>
     <Route path="/signin" component={Signin} exact />
    </Switch>
     
    </Router>
  );
}

export default App;
