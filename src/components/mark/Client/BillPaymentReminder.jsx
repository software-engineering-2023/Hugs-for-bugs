import React, { useState, useEffect } from 'react';

const BillPaymentReminder = () => {
    useEffect(() => {
        function displaySuccessMessage() {
            setReminderSuccess(true);
        }

        const form = document.getElementById('reminderForm');
        form.addEventListener('submit', displaySuccessMessage);

        return () => {
            form.removeEventListener('submit', displaySuccessMessage);
        };
    }, []);

    const [reminderSuccess, setReminderSuccess] = useState(false);

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
                <h1>Bill Payment Reminders</h1>

                <form id="reminderForm" >
                    <label htmlFor="billType">Select Bill Type:</label>
                    <select id="billType" name="billType" required>
                        <option value="">-- Select Bill Type --</option>
                        <option value="gas">Gas Bill</option>
                        <option value="electricity">Electricity Bill</option>
                        <option value="water">Water Bill</option>
                        <option value="telephone">Telephone Bill</option>
                    </select>
                    <br></br>

                    <label htmlFor="billAmount">Bill Amount:</label>
                    <input type="number" id="billAmount" name="billAmount" required />
                    <br></br>

                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate" required />
                    <br></br>

                    <label>Reminder Method:</label>
                    <div className="checkbox-group">
                        <input type="checkbox" id="emailReminder" name="reminderMethod[]" value="email" />
                        <label htmlFor="emailReminder">Email</label>

                        <input type="checkbox" id="smsReminder" name="reminderMethod[]" value="sms" />
                        <label htmlFor="smsReminder">SMS</label>

                        <input type="checkbox" id="appNotification" name="reminderMethod[]" value="app" />
                        <label htmlFor="appNotification">App Notification</label>
                    </div>
                    <br></br>

                    <input  value="Set Reminder" />
                </form>

                {reminderSuccess && (
                    <div className="success-message">
                        Reminder set successfully!
                    </div>
                )}
            </body >
        </>
    );
};

export default BillPaymentReminder;
