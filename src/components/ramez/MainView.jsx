import React, { useState } from 'react'
// import Credit_Card from './mohamed/Apply_for_a_credit_card/Credit_Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import { Router } from 'react-router';
import Navigation from './Navigation';
import BeginView from './BeginView';
import Credit_Card from '../mohamed/Apply_for_a_credit_card/Credit_Card'
const MainView = () => {

  let [view, setView] = useState("BeginView");
  return (
    <>

    <Navigation setView={setView}/>


      {view === "BeginView" ? <BeginView /> : null}
      {view === "Credit_Card" ? <Credit_Card /> : null}


    </>
  )






}

export default MainView
