import React from 'react';

const LoanApplications = () => {
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
  );
};

export default LoanApplications;
