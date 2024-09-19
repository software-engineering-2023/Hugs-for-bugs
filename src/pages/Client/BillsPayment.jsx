import React, { useState } from 'react';

const BillPayment = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const displaySuccessMessage = () => {
    setPaymentSuccess(true);
  };

  const successMessageStyle = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '4px',
    display: paymentSuccess ? 'block' : 'none',
    textAlign: 'center',
  };

  return (
    <>
      <head>
        <title>Bill Payment Reminders</title>
        <style>
          {` 
          h1 {
            text-align: center;
          }

          form {
            max-width: 400px;
            margin: 0 auto;
          }

          label {
            display: block;
            margin-bottom: 10px;
          }

          input[type="number"],
          input[type="date"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          input[type="submit"] {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .success-message {
            margin-top: 20px;
            padding: 10px;
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
            border-radius: 4px;
          }

          .checkbox-group label {
            display: inline-block;
            margin-right: 10px;
          }
          `}
        </style>
       

      </head>
      <body style={{
                margin: "0",
                padding: "100px"
            }
            }>
      <h1 style={{ textAlign: 'center' }}>Bill Payment</h1>
      <form onSubmit={displaySuccessMessage} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label htmlFor="billType" style={{ display: 'block', marginBottom: '10px' }}>Select Bill Type:</label>
        <select id="billType" name="billType" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <option value="">-- Select Bill Type --</option>
          <option value="gas">Gas Bill</option>
          <option value="electricity">Electricity Bill</option>
          <option value="water">Water Bill</option>
          <option value="telephone">Telephone Bill</option>
        </select>
        <br /><br />

        <label htmlFor="billAmount" style={{ display: 'block', marginBottom: '10px' }}>Bill Amount:</label>
        <input type="number" id="billAmount" name="billAmount" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
        <br /><br />

        <label htmlFor="paymentMethod" style={{ display: 'block', marginBottom: '10px' }}>Payment Method:</label>
        <input type="radio" id="bankPayment" name="paymentMethod" value="bank" required style={{ marginRight: '5px' }} />
        <label htmlFor="bankPayment">Through Bank</label>

        <input type="radio" id="thirdPartyPayment" name="paymentMethod" value="thirdParty" style={{ marginRight: '5px' }} />
        <label htmlFor="thirdPartyPayment">Third-Party App (Optional)</label>
        <br />

        <input type="submit" value="Pay" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
      </form>

      <div id="successMessage" className="success-message" style={successMessageStyle}>
        Payment succeeded!
      </div>
      </body>
    </>
  );
};

export default BillPayment;
