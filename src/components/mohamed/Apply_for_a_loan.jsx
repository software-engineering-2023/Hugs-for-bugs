import React from 'react';
import { useEffect, useState } from 'react';



function Apply_for_a_loan() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const mob = document.getElementById('mob').value;
    const job = document.getElementById('job').value;
    const ans = document.getElementById('ans').value;
    const money = document.getElementById('money').value;

    if (!fname || !lname || !email || !mob || !job || !ans || !money) {
      setErrorMessage('Fill all the required fields.');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Form submitted successfully.');
      // Add code here to handle form submission logic
    }
  }
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Snippet - BBBootstrap</title>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"></script>

        <style>
          {`
          ::-webkit-scrollbar {
            width: 8px;
      }
          /* Track */
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
      }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #888;
      }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
      }
          body {
            color: #000;
          overflow-x: hidden;
          height: 100%;
          background-color: rgb(237, 245, 244);
          background-repeat: no-repeat;
          background-size: 100% 130%;
      }
          .cardm {
            padding: 30px 40px;
          margin-top: 60px;
          margin-bottom: 60px;
          border: none !important;
          box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
      }
          .blue-text {
            color: #00bcd4;
      }
          .form-control-label {
            margin - bottom: 0;
      }
          input,
          textarea,
          button {
            padding: 8px 15px;
          border-radius: 5px !important;
          margin: 5px 0px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          font-size: 18px !important;
          font-weight: 300;
      }
          input:focus,
          textarea:focus {
            -moz - box - shadow: none !important;
          -webkit-box-shadow: none !important;
          box-shadow: none !important;
          border: 1px solid #00bcd4;
          outline-width: 0;
          font-weight: 400;
      }
          .btn-block {
            text - transform: uppercase;
          font-size: 15px !important;
          font-weight: 400;
          height: 43px;
          cursor: pointer;
      }
          .btn-block:hover {
            color: #fff !important;
      }
          button:focus {
            -moz - box - shadow: none !important;
          -webkit-box-shadow: none !important;
          box-shadow: none !important;
          outline-width: 0;
      }
      `}
        </style>
      </head>
      <body className="snippet-body">
        <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center" style={{ marginTop: "80px" }}>
              <h3>Apply for a loan</h3>
              <div class="form-group col-sm-6">
                {errorMessage && (
                  <div class="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div class="alert alert-success" role="alert">
                    {successMessage}
                  </div>
                )}
              </div>
              <div class="cardm">
                <div class="form-card" >
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                      >First name<span class="text-danger"> *</span></label                      >
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter your first name"
                        onblur={() => validate(1)}
                      />
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                      >Last name<span class="text-danger"> *</span></label                      >
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        placeholder="Enter your last name"
                        onblur={() => validate(2)}
                      />
                    </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                      >National ID< span class="text-danger"> *</span></label                      >
                      <input
                        type="number"
                        id="email"
                        name="email"
                        placeholder="Enter your national ID"
                        onblur={() => validate(3)}
                      />
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                      >First phone number<span class="text-danger">
                          *</span                         ></label                      >
                      <input
                        type="number"
                        id="mob"
                        name="mob"
                        placeholder="Enter your first phone number"
                        onblur={() => validate(4)}
                      />
                    </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                      >Job title<span class="text-danger"> *</span></label                      >
                      <input
                        type="text"
                        id="job"
                        name="job"
                        placeholder="Enter your job title"
                        onblur={() => validate(5)}
                      />
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                      >Second phone number<span class="text-danger"> </span                      ></label>
                      <input
                        type="number"
                        id="mob"
                        name="mob"
                        placeholder="Enter your second phone number"
                        onblur={() => validate(4)}
                      />
                    </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-12 flex-column d-flex">
                      <label class="form-control-label px-3"
                      >What are your guarantees?<span class="text-danger">
                          *</span                        ></label                      >
                      <input
                        type="text"
                        id="ans"
                        name="ans"
                        placeholder="Enter your answer"
                        onblur={() => validate(6)}
                      />
                    </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-6 flex-column d-flex">
                      <label
                      >Personal or Car?<span class="text-danger"> *</span></label                      >
                      <select class="form-control">

                        <option value="1">Personal</option>
                        <option value="2">Car</option>
                      </select>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"                  >Loan Amount<span class="text-danger"> *</span></label                      >
                      <input
                        type="number"
                        id="money"
                        name="money"
                        placeholder="Enter the amount of money in EGP"
                        onblur={() => validate(4)}
                      />
                    </div>
                  </div>

                  <div class="row justify-content-end">
                    <div class="form-group col-sm-6">
                      <button
                        // type="submit"
                        class="btn-block btn-primary"
                        onClick={validate}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </body>
    </html >


  );
}

export default Apply_for_a_loan;