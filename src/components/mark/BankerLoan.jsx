import React from 'react';

const BankerLoan = () => {
  const handleAccept = (event) => {
    const container = event.target.closest('.application');
    const acceptButton = container.querySelector('.action-button.accept');
    const rejectButton = container.querySelector('.action-button.reject');
    const message = container.querySelector('.message');
    acceptButton.style.display = 'none';
    rejectButton.style.display = 'none';
    message.textContent = 'The loan Accepted';
  };

  const handleReject = (event) => {
    const container = event.target.closest('.application');
    const acceptButton = container.querySelector('.action-button.accept');
    const rejectButton = container.querySelector('.action-button.reject');
    const message = container.querySelector('.message');
    acceptButton.style.display = 'none';
    rejectButton.style.display = 'none';
    message.textContent = 'The loan Rejected';
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bank System</title>
        <style>
          {`
            body {
                color: #000;
                overflow-x: hidden;
                height: 100%;
                background-image: url("image/Credits.png");
                background-repeat: no-repeat;
                background-attachment: fixed;
                background-size: cover;
                background-position: center;
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
          
              .application {
                background-color: #fff;
                border-radius: 4px;
                padding: 10px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
              }
          
              .application-details {
                flex-grow: 1;
                margin-left: 10px;
              }
          
              .application-name {
                font-weight: bold;
              }
          
              .application-id,
              .application-type {
                color: #777;
              }
          
              .action-buttons {
                display: flex;
                align-items: center;
              }
          
              .action-button {
                margin-left: 5px;
                padding: 8px 12px;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                color: #fff;
                background-color: #007bff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: background-color 0.3s ease;
              }
          
              .action-button.accept {
                background-color: #28a745;
              }
          
              .action-button.reject {
                background-color: #dc3545;
              }
          
              .action-button:hover {
                background-color: #0056b3;
              }
          
              .message {
                margin-top: 10px;
                font-weight: bold;
                color: #333;
                text-align: center;
              }
          `}
        </style>
      </head>
      <div className="container">
        <h1>Bank System - Loan Applications</h1>

        <div className="application">
          <div className="application-details">
            <p className="application-name">Mark Mahrous</p>
            <p className="application-id">ID: 2353</p>
            <p className="application-type">Type: Personal Loan Application</p>
          </div>
          <div className="action-buttons">
            <button className="action-button accept" onClick={handleAccept}>Accept</button>
            <button className="action-button reject" onClick={handleReject}>Reject</button>
            <div className="message"></div>
          </div>
        </div>

        <div className="application">
          <div className="application-details">
            <p className="application-name">Kermina Safwat</p>
            <p className="application-id">ID: 2354</p>
            <p className="application-type">Type: Mortgage Loan Application</p>
          </div>
          <div className="action-buttons">
            <button className="action-button accept" onClick={handleAccept}>Accept</button>
            <button className="action-button reject" onClick={handleReject}>Reject</button>
            <div className="message"></div>
          </div>
        </div>

        <div className="application">
          <div className="application-details">
            <p className="application-name">Cristiano Ronaldo</p>
            <p className="application-id">ID: 1587</p>
            <p className="application-type">Type: Business Loan Application</p>
          </div>
          <div className="action-buttons">
            <button className="action-button accept" onClick={handleAccept}>Accept</button>
            <button className="action-button reject" onClick={handleReject}>Reject</button>
            <div className="message"></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default BankerLoan;
