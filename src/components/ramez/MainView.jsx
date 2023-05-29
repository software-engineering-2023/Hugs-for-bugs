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
import BillPaymentReminder from '../mark/Client/BillPaymentReminder';
import BillPayment from '../mark/Client/BillsPayment';
import ViewPoints from '../mark/Client/ViewPoints';
import CreditCardBills from '../mark/Client/CreditCardBills';
import CreditCardIssue from '../mark/CreditCardIssue';
import TechnicalIssue from '../mark/TechnicalIssue';
import Apply_for_a_loan from '../mohamed/Apply_for_a_loan'
import Notifications_reminders from '../mohamed/Notifications_reminders';
import View_bank_account_transactions from '../mohamed/View_bank_account_transactions'
import View_credit_card_transactions from '../mohamed/View_credit_card_transactions';
import BeginNavigation from './BeginNavigation';

const MainView = () => {

 
  return (
    <>
      <div>
        <input
          class="position-absolute"
          style={{ width: "5%", height: "1%", top: "-170px", right: "150px" }}
          autoFocus type="text" onKeyPress={handleAnswerChange} onChange={handleAnswerChange} />
      </div>
      
      <BeginNavigation setView={setView} />
      {view === "Login" ? <Login setView={setView} /> : null}
      {view === "SignUp" ? <SignUp /> : null}
    </>
  )
}

export default MainView
