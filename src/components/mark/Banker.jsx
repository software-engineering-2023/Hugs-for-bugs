import React from 'react';
import { Link } from 'react-router-dom';

const Banker = ({setView}) => {
  return (
    <html lang="en">
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
              background-image: url("image/First.jpg");
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
              color: #ffffff;
            }

            .btn-container {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .btnmark {
              display: block;
              width: 100%;
              max-width: 400px;
              margin: 10px 0;
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
      <body>
        
        <div style={{
              width: "600px",
              margin: "auto",
              padding: '20px'
            }}>
          <h1>Bank System</h1>
          <div class="btn-container">
            <a onClick={()=>setView("BankerLoan")} class="btnmark">View All Loan Applications</a>
            <a onClick={()=>setView("HandleCredit")} class="btnmark">View All Credit Card Applications</a>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Banker;
