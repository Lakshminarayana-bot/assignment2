import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Route,
   Switch,
    Link, 
    Redirect } from "react-router-dom";

import NotFoundPage from "./pages/404"

import Work from './Work';
import Model from './Model';


class App extends Component {
  render() {
    return (
      <Router>
               
      <Switch>
      <Route exact path="/" component={Work}/>
    <Route exact path="/harsha" component={() => <Model name={"harsha"} age={"24"} hobbie={"manchitanam"} branch="ME" power="Time stone"/>}/>
      <Route exact path="/404" component={NotFoundPage}/>
    <Route exact path="/leela" component={() => <Model name={"leela"} age={"24"} hobbie={"progrmming"} branch="CSE" power="Power staone"/>}/>
    <Route exact path="/chetan" component={() => <Model name={"chetan"} age={"20"} hobbie={"all interesting things "} branch="EEE" power="mind stone"/>}/>
    <Route exact path="/sirisha" component={() => <Model name="sirisha" age="23" hobbie="singing" branch="CE" power="soul stone"/>}/>
    <Route exact path="/indu" component={() => <Model name="indu" age="22" hobbie="watching korean drama" branch="MBBS" power="reality stone"/>}/>
    <Route exact path="/banu" component={() => <Model name="banu" age="20" hobbie="reading" branch="EEE" power="space stone"/>}/>
      <Redirect to="/404"/>
      </Switch>


      </Router> 
            
    );
  }
}

export default App;
