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
import Open_bank_account from '../mohamed/Open_bank_account'
import BeginNavigation from './BeginNavigation';
import CloseAccount from '../mark/CloseAccount'
const Client = () => {
    let [view, setView] = useState("BeginView");
    return (
        <>
            <Navigation setView={setView} />
            {view === "BeginView" ? <BeginView setView={setView} /> : null}
            {view === "Credit_Card" ? <Credit_Card setView={setView} /> : null}
            {view === "Blind" ? <Blind /> : null}
            {view === "Speach" ? <Speach /> : null}
            {view === "BillPaymentReminder" ? <BillPaymentReminder /> : null}
            {view === "BillsPayment" ? <BillPayment /> : null}
            {view === "CreditCardBills" ? <CreditCardBills /> : null}
            {view === "ViewPoints" ? <ViewPoints /> : null}
            {view === "CreditCardIssue" ? <CreditCardIssue /> : null}
            {view === "TechnicalIssue" ? <TechnicalIssue /> : null}
            {view === "Apply_for_a_loan" ? <Apply_for_a_loan /> : null}
            {view === "Notifications_reminders" ? <Notifications_reminders /> : null}
            {view === "View_bank_account_transactions" ? <View_bank_account_transactions /> : null}
            {view === "View_credit_card_transactions" ? <View_credit_card_transactions /> : null}
            {view === "Open_bank_account" ? <Open_bank_account /> : null}
            {view === "CloseAccount" ? <CloseAccount /> : null}

        </>
    )
}

export default Client