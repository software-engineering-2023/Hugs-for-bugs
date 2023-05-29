import React, { useState, useEffect } from 'react';

const CreditCardBills = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentAmounts, setPaymentAmounts] = useState(Array(3).fill(''));
  const [messages, setMessages] = useState(Array(3).fill(''));

  const payPartial = (index) => {
    const newPaymentAmounts = [...paymentAmounts];
    newPaymentAmounts[index] = '';
    setPaymentAmounts(newPaymentAmounts);

    const newMessages = [...messages];
    newMessages[index] = '';
    setMessages(newMessages);
  };

  const payFull = (index, billAmount) => {
    makePayment(index, parseFloat(billAmount.replace('Bill Amount: $', '')));
  };

  const makePayment = (index, amount) => {
    const billAmountElement = document.querySelectorAll('.bill-amount')[index];
    const paymentAmountInput = document.querySelectorAll('.payment-amount')[index];
    const message = document.querySelectorAll('.message')[index];

    let billAmount = parseFloat(billAmountElement.textContent.replace('Bill Amount: $', ''));
    billAmount -= amount;

    if (billAmount < 0) {
      message.textContent = `You should only pay $${billAmount + amount}`;
      return;
    }

    billAmountElement.textContent = `Bill Amount: $${billAmount.toFixed(2)}`;
    paymentAmountInput.value = '';
    message.textContent = 'Payment successful!';

    if (billAmount === 0) {
      message.textContent = 'Bill fully paid!';
    }
  };

  const handlePaymentAmountChange = (index, amount) => {
    const newPaymentAmounts = [...paymentAmounts];
    newPaymentAmounts[index] = amount;
    setPaymentAmounts(newPaymentAmounts);
  };

  const handleSubmitPayment = (index) => {
    const amountToPay = parseFloat(paymentAmounts[index]);

    if (isNaN(amountToPay)) {
      const newMessages = [...messages];
      newMessages[index] = 'Invalid amount entered. Please enter a valid number.';
      setMessages(newMessages);
      return;
    }

    const billAmountElement = document.querySelectorAll('.bill-amount')[index];
    const billAmount = parseFloat(billAmountElement.textContent.replace('Bill Amount: $', ''));

    if (amountToPay > billAmount) {
      const newMessages = [...messages];
      newMessages[index] = `You should only pay $${billAmount}`;
      setMessages(newMessages);
      return;
    }

    makePayment(index, amountToPay);
  };

  useEffect(() => {
    const payPartialButtons = document.querySelectorAll('.pay-partial-btn');
    const payFullButtons = document.querySelectorAll('.pay-full-btn');
    const paymentSections = document.querySelectorAll('.payment-section');
    const paymentAmountInputs = document.querySelectorAll('.payment-amount');
    const payButtons = document.querySelectorAll('.pay-btn');
    const messages = document.querySelectorAll('.message');

    payPartialButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        paymentSections[index].style.display = 'block';
        messages[index].textContent = '';
      });
    });

    payFullButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        makePayment(index, parseFloat(button.parentNode.parentNode.querySelector('.bill-amount').textContent.replace('Bill Amount: $', '')));
      });
    });

    payButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const amountToPay = parseFloat(paymentAmountInputs[index].value);

        if (isNaN(amountToPay)) {
          messages[index].textContent = 'Invalid amount entered. Please enter a valid number.';
          return;
        }

        const billAmount = parseFloat(button.parentNode.parentNode.querySelector('.bill-amount').textContent.replace('Bill Amount: $', ''));

        if (amountToPay > billAmount) {
          messages[index].textContent = `You should only pay $${billAmount}`;
          return;
        }

        makePayment(index, amountToPay);
      });
    });

    return () => {
      payPartialButtons.forEach((button, index) => {
        button.removeEventListener('click', () => {
          paymentSections[index].style.display = 'block';
          messages[index].textContent = '';
        });
      });

      payFullButtons.forEach((button, index) => {
        button.removeEventListener('click', () => {
          makePayment(index, parseFloat(button.parentNode.parentNode.querySelector('.bill-amount').textContent.replace('Bill Amount: $', '')));
        });
      });

      payButtons.forEach((button, index) => {
        button.removeEventListener('click', () => {
          const amountToPay = parseFloat(paymentAmountInputs[index].value);

          if (isNaN(amountToPay)) {
            messages[index].textContent = 'Invalid amount entered. Please enter a valid number.';
            return;
          }

          const billAmount = parseFloat(button.parentNode.parentNode.querySelector('.bill-amount').textContent.replace('Bill Amount: $', ''));

          if (amountToPay > billAmount) {
            messages[index].textContent = `You should only pay $${billAmount}`;
            return;
          }

          makePayment(index, amountToPay);
        });
      });
    };
  }, []);

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Credit Cards Bills</title>
        <style>
          {`  
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding-top: 100px;
            }

            h1 {
              text-align: center;
              color: #333;
            }

            .bill-card {
              background-color: #fff;
              padding: 20px;
              margin-bottom: 20px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .bill-card h3 {
              margin-top: 0;
            }

            .bill-card p {
              margin: 5px 0;
            }
            .btn-container {
              display: flex;
              justify-content: space-between;
              margin-top: 10px;
            }
            .payment-section {
              display: none;
              margin-top: 20px;
            }
            .payment-section input {
              width: 100%;
              padding: 10px;
              margin-bottom: 10px;
              box-sizing: border-box;
            }
            .message {
              margin-top: 10px;
              color: green;
              font-weight: bold;
            }

            .btnm {
              display: block;
              width: 100%;
              max-width: 200px;
              padding: 12px 20px;
              font-size: 16px;
              font-weight: bold;
              text-align: center;
              color: #fff;
              background-color: #5a99dd;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }

            .btn:hover {
              background-color: #0056b3;
            }
          `}
        </style>
      </head>
      <body style={{ margin: '0', backgroundColor: '#f0f0f0' }}>
        <div className="container">
          <h1>Bank System - Credit Cards Bills</h1>

          <div className="bill-card">
            <h3>Credit Card 1</h3>
            <p>ID: 101</p>
            <p>Type: Rewards Card</p>
            <p className="bill-amount">Bill Amount: $100</p>
            <div className="btn-container">
              <button className="pay-partial-btn btnm">Pay Partially</button>
              <button className="pay-full-btn btnm">Pay Fully</button>
            </div>
            <div className="payment-section">
              <input type="number" className="payment-amount" placeholder="Enter amount to pay" />
              <button className="pay-btn btnm">Pay</button>
            </div>
            <div className="message"></div>
          </div>

          <div className="bill-card">
            <h3>Credit Card 2</h3>
            <p>ID: 102</p>
            <p>Type: Travel Card</p>
            <p className="bill-amount">Bill Amount: $200</p>
            <div className="btn-container">
              <button className="pay-partial-btn btnm">Pay Partially</button>
              <button className="pay-full-btn btnm">Pay Fully</button>
            </div>
            <div className="payment-section">
              <input type="number" className="payment-amount" placeholder="Enter amount to pay" />
              <button className="pay-btn btnm">Pay</button>
            </div>
            <div className="message"></div>
          </div>

          <div className="bill-card">
            <h3>Credit Card 3</h3>
            <p>ID: 103</p>
            <p>Type: Cashback Card</p>
            <p className="bill-amount">Bill Amount: $150</p>
            <div className="btn-container">
              <button className="pay-partial-btn btnm">Pay Partially</button>
              <button className="pay-full-btn btnm">Pay Fully</button>
            </div>
            <div className="payment-section">
              <input type="number" className="payment-amount" placeholder="Enter amount to pay" />
              <button className="pay-btn btnm">Pay</button>
            </div>
            <div className="message"></div>
          </div>
        </div>
      </body>
    </>
  );
};

export default CreditCardBills;
