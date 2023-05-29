import React from 'react'
import { useEffect, useState } from 'react';


const Open_bank_account = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const mob = document.getElementById('mob').value;
        const job = document.getElementById('job').value;
        const money = document.getElementById('money').value;

        if (!fname || !lname || !email || !mob || !job || !money) {
            setErrorMessage('Fill all the required fields.');
            setSuccessMessage('');
        } else {
            setErrorMessage('');
            setSuccessMessage('Form submitted successfully.');
            // Add code here to handle form submission logic
        }
    }
    return (
        <>
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
                    {`    ::-webkit-scrollbar {
                        width: 8px;
      }
                    /* Track */
                    ::-webkit-scrollbar-track {
                        background: #f1f1f1;
      }

                    /* Handle */
                    ::-webkit-scrollbar-thumb {
                        background: #faf9f9;
      }

                    /* Handle on hover */
                    ::-webkit-scrollbar-thumb:hover {
                        background: #555;
      }
                    body {
                        color: #000;
                    overflow-x: hidden;
                    height: 100%;
                    background-color: rgb(255, 255, 255);
                    background-repeat: no-repeat;
                    background-size: 100% 130%;
      }
                    .cardmm {
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
    `  }
                </style>
            </head>
            <body className="snippet-body">
                <div class="container-fluid px-1 py-5 mx-auto">
                    <div class="row d-flex justify-content-center">
                        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                            <h3>Open a bank account</h3>

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

                            <div class="cardmm">
                                <div class="form-card" onsubmit="event.preventDefault()">
                                    <div class="row justify-content-between text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3"
                                            >First name<span class="text-danger"> *</span></label
                                            >
                                            <input
                                                type="text"
                                                id="fname"
                                                name="fname"
                                                placeholder="Enter your first name"
                                                onblur="validate(1)"
                                            />
                                        </div>
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3"
                                            >Last name<span class="text-danger"> *</span></label
                                            >
                                            <input
                                                type="text"
                                                id="lname"
                                                name="lname"
                                                placeholder="Enter your last name"
                                                onblur="validate(2)"
                                            />
                                        </div>
                                    </div>
                                    <div class="row justify-content-between text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3"
                                            >National ID<span class="text-danger"> *</span></label
                                            >
                                            <input
                                                type="number"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your national ID"
                                                onblur="validate(3)"
                                            />
                                        </div>
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3"
                                            >Email<span class="text-danger"> *</span></label
                                            >
                                            <input
                                                type="Email"
                                                id="money"
                                                name="money"
                                                placeholder="Enter an Email"
                                                onblur="validate(4)"
                                            />
                                        </div>
                                    </div>
                                    <div class="row justify-content-between text-left">
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3"
                                            >Job title<span class="text-danger"> *</span></label
                                            >
                                            <input
                                                type="text"
                                                id="job"
                                                name="job"
                                                placeholder="Enter your job title"
                                                onblur="validate(5)"
                                            />
                                        </div>
                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3"
                                            >First phone number<span class="text-danger">
                                                    *</span
                                                ></label
                                            >
                                            <input
                                                type="number"
                                                id="mob"
                                                name="mob"
                                                placeholder="Enter your first phone number"
                                                onblur="validate(4)"
                                            />
                                        </div>
                                    </div>

                                    <div class="row justify-content-between text-left">
                                        <div class="form-group col-6 flex-column d-flex">
                                            <label>
                                                Type of bank account type<span class="text-danger">
                                                    *</span
                                                ></label
                                            >
                                            <select class="form-control">

                                                <option value="1">Current Accoount</option>
                                                <option value="2">Saving Account</option>
                                            </select>
                                        </div>

                                        <div class="form-group col-sm-6 flex-column d-flex">
                                            <label class="form-control-label px-3"
                                            >Second phone number<span class="text-danger"> </span
                                            ></label>
                                            <input
                                                type="number"
                                                id="mob"
                                                name="mob"
                                                placeholder="Enter your second phone number"
                                                onblur="validate(4)"
                                            />
                                        </div>
                                    </div>

                                    <div class="row justify-content-end">
                                        <div class="form-group col-sm-6">
                                            <button
                                                class="btn-block btn-primary"
                                                onClick={validate}
                                            >
                                                Open a new account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <script
                    type="text/javascript"
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
                ></script>
                <script>
                    function bootstrapAlert() {
                        v1 = document.getElementById("fname");
                    v2 = document.getElementById("lname");
                    v3 = document.getElementById("email");
                    v4 = document.getElementById("mob");
                    v5 = document.getElementById("job");
                    v7 = document.getElementById("money");
                    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    $(".bootstrap-growl").remove();
                    if (
                    v1.value == "" ||
                    v2.value == "" ||
                    v3.value == "" ||
                    v4.value == "" ||
                    v5.value == "" ||
                    emailPattern.test(v7.value) == false
                    ) {
                        $.bootstrapGrowl("Fill the required fields.", {
                            ele: "body", // which element to append to
                            type: "danger", // (null, 'info', 'error', 'success')
                            offset: { from: "top", amount: 90 }, // 'top', or 'bottom'
                            align: "center", // ('left', 'right', or 'center')

                            width: 250, // (integer, or 'auto')
                            delay: 4000,
                            allow_dismiss: true,
                            stackup_spacing: 10, // spacing between consecutively stacked growls.
                        });
        } else {
                        $.bootstrapGrowl("Well done! submitted successfully.", {
                            ele: "body", // which element to append to
                            type: "success", // (null, 'info', 'error', 'success')
                            offset: { from: "top", amount: 90 }, // 'top', or 'bottom'
                            align: "center", // ('left', 'right', or 'center')
                            width: 300, // (integer, or 'auto')
                            delay: 4000,
                            allow_dismiss: true,
                            stackup_spacing: 10, // spacing between consecutively stacked growls.
                        });
        }
      }
                </script>
                <script type="text/javascript" src="#"></script>
                <script type="text/javascript" src="#"></script>
                <script type="text/javascript" src="#"></script>
                <script type="text/javascript">
                    function validate(val) {
                        v1 = document.getElementById("fname");
                    v2 = document.getElementById("lname");
                    v3 = document.getElementById("email");
                    v4 = document.getElementById("mob");
                    v5 = document.getElementById("job");
                    v6 = document.getElementById("ans");

                    flag1 = true;
                    flag2 = true;
                    flag3 = true;
                    flag4 = true;
                    flag5 = true;
                    flag6 = true;

        if (val >= 1 || val == 0) {
          if (v1.value == "") {
                        v1.style.borderColor = "red";
                    flag1 = false;
          } else {
                        v1.style.borderColor = "green";
                    flag1 = true;
          }
        }

        if (val >= 2 || val == 0) {
          if (v2.value == "") {
                        v2.style.borderColor = "red";
                    flag2 = false;
          } else {
                        v2.style.borderColor = "green";
                    flag2 = true;
          }
        }
        if (val >= 3 || val == 0) {
          if (v3.value == "") {
                        v3.style.borderColor = "red";
                    flag3 = false;
          } else {
                        v3.style.borderColor = "green";
                    flag3 = true;
          }
        }
        if (val >= 4 || val == 0) {
          if (v4.value == "") {
                        v4.style.borderColor = "red";
                    flag4 = false;
          } else {
                        v4.style.borderColor = "green";
                    flag4 = true;
          }
        }
        if (val >= 5 || val == 0) {
          if (v5.value == "") {
                        v5.style.borderColor = "red";
                    flag5 = false;
          } else {
                        v5.style.borderColor = "green";
                    flag5 = true;
          }
        }
        if (val >= 6 || val == 0) {
          if (v6.value == "") {
                        v6.style.borderColor = "red";
                    flag6 = false;
          } else {
                        v6.style.borderColor = "green";
                    flag6 = true;
          }
        }

                    flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

                    return flag;
      }
                </script>
                <script type="text/javascript">
                    var myLink = document.querySelector('a[href="#"]');
                    myLink.addEventListener("click", function (e) {
                        e.preventDefault();
      });
                </script> */}
            </body>


        </>
    )
}

export default Open_bank_account