import React, { useState } from 'react';

const CreditCardIssue = () => {
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [replacementMessageVisible, setReplacementMessageVisible] = useState(false);

    const displaySuccessMessage = () => {
        setSuccessMessageVisible(true);
    };

    const displayReplacementMessage = () => {
        setReplacementMessageVisible(true);
    };

    return (
        <>
            <head>
                <style>
                    {` 
                    bodym {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0px;
      background-color: #f2f2f2;
    }
    .container {     }

    h1 {
      text-align: center;
    }

    formm {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input[type="number"] {
      width: 30%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    textarea {
      width: 40%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="submit"],
    button {
      padding: 10px 20px;
      background-color: #3636c5;
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
      display: none;
      text-align: center;
    }
 `}
                </style>
            </head>
            <div className='container'>
                <h1>Report Credit Card Theft/Loss/Damage</h1>

                <form onSubmit={displaySuccessMessage} 
                 style={{
                    maxWidth: '600px',
                    margin: '0 auto',
                    marginTop: '80px',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '4px',
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
                  }}
                
                >
                    <label htmlFor="creditCardNumber">Credit Card Number:</label>
                    <input
                        type="number"
                        id="creditCardNumber"
                        name="creditCardNumber"
                        placeholder="Enter credit card number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        required
                    />
                    <br />
                    <br />

                    <label htmlFor="issueType">Issue Type:</label>
                    <select id="issueType" name="issueType" required>
                        <option value="">-- Select Issue Type --</option>
                        <option value="theft">Theft</option>
                        <option value="loss">Loss</option>
                        <option value="damage">Damage</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="description">Issue Description:</label>
                    <textarea id="description" name="description" rows="6" required></textarea>
                    <br />
                    <br />

                    <input type="submit" value="Submit Report" />
                </form>

                <div
                    id="successMessage"
                    className="success-message"
                    style={{ display: successMessageVisible ? 'block' : 'none' }}
                >
                    Report submitted successfully!
                    <button
                        onClick={displayReplacementMessage}
                        style={{
                            backgroundColor: '#3636c5',
                            marginTop: '10px',
                            color: '#fff',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Apply for Replacement
                    </button>
                </div>

                <div
                    id="replacementMessage"
                    className="success-message"
                    style={{ display: replacementMessageVisible ? 'block' : 'none' }}
                >
                    Replacement requested successfully!
                </div>
            </div>
        </>
    );
};

export default CreditCardIssue;
