import React, { useState, useEffect } from 'react'
// import Credit_Card from './mohamed/Apply_for_a_credit_card/Credit_Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { Router } from 'react-router';
import Navigation from './Navigation';
import BeginView from './BeginView';
import Credit_Card from '../mohamed/Apply_for_a_credit_card/Credit_Card'
import Login from './Login';
import SignUp from './SignUp';
import Blind from './Blind/Blind';
import Speach from './Blind/Speach';
const MainView = () => {

  let [view, setView] = useState("BeginView");
  return (
    <>
      <Navigation setView={setView} />
      {view === "BeginView" ? <BeginView setView={setView}/> : null}
      {view === "Credit_Card" ? <Credit_Card /> : null}
      {view === "Login" ? <Login /> : null}
      {view === "SignUp" ? <SignUp /> : null}
      {view === "Blind" ? <Blind /> : null}
      {view === "Speach" ? <Speach /> : null}
    </>
  )






}

export default MainView
