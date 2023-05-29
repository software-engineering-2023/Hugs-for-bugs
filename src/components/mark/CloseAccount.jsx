import React from 'react';
import { useState } from 'react';
const CloseAccount = () => {
 let [close1, setClose1] = useState(true);
  let [close2, setClose2] = useState(true);
  let [close3, setClose3] = useState(true);


  return (
    <div className="container">
      <h1>Bank System - Close Bank Accounts</h1>

      <div className="account">
        <div className="account-details">
          <p className="account-id">Account ID: 1234</p>
          <p className="account-status">Status: Active</p>
          <p className="account-type">Type: Checking Account</p>
        </div>
        {
          close1 ? <button className="close-button" onClick={() => { setClose1(false) }}>Close</button> : <div className="message">Account closed</div>
        }
      
      </div>

      <div className="account">
        <div className="account-details">
          <p className="account-id">Account ID: 5678</p>
          <p className="account-status">Status: Active</p>
          <p className="account-type">Type: Savings Account</p>
        </div>
        {
          close2 ? <button className="close-button" onClick={() => { setClose2(false) }}>Close</button> : <div className="message">Account closed</div>
        }
      
      </div>

      <div className="account">
        <div className="account-details">
          <p className="account-id">Account ID: 9876</p>
          <p className="account-status">Status: Active</p>
          <p className="account-type">Type: Investment Account</p>
        </div>
        {
          close3 ? <button className="close-button" onClick={() => { setClose3(false) }}>Close</button> : <div className="message">Account closed</div>
        }
      
      </div>

      <style>
        {`
        body {
          color: #000;
          overflow-x: hidden;
          height: 100%;
          background-color: #f2f2f2;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          text-align: center;
          color: #333;
        }

        .account {
          background-color: #fff;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 10px;
        }

        .account-details {
          margin-bottom: 10px;
        }

        .account-id {
          font-weight: bold;
        }

        .account-status,
        .account-type {
          color: #777;
        }

        .close-button {
          margin-top: 10px;
          padding: 8px 12px;
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          color: #fff;
          background-color: #dc3545;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .close-button:hover {
          background-color: #b00020;
        }

        .message {
          margin-top: 10px;
          font-weight: bold;
          color: #333;
          text-align: center;
        }
      `}
      </style>
    </div>
  );
};

export default CloseAccount;
