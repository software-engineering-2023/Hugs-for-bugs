
import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom';

const Credit_Card = ({setView}) => {
  let  myLink = document.querySelector('a[href="#"]');
  myLink.addEventListener("click", function (e) {
    e.preventDefault()
  })


  function validate(val) {
    let v1 = document.getElementById("fname");
    let v2 = document.getElementById("lname");
    let v3 = document.getElementById("email");
    let v4 = document.getElementById("mob");
    let v5 = document.getElementById("job");
    let v6 = document.getElementById("ans");

    let flag1 = true;
    let flag2 = true;
    let flag3 = true;
    let flag4 = true;
    let flag5 = true;
    let flag6 = true;

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

    let flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

    return flag;
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
     {` ::-webkit-scrollbar {
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
      .body {
        color: #000;
        overflow-x: hidden;
        height: 100%;
        background-image: url("images/bg.png");
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
        margin-bottom: 0;
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
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border: 1px solid #00bcd4;
        outline-width: 0;
        font-weight: 400;
      }
      .btn-block {
        text-transform: uppercase;
        font-size: 15px !important;
        font-weight: 400;
        height: 43px;
        cursor: pointer;
      }
      .btn-block:hover {
        color: #fff !important;
      }
      button:focus {
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        outline-width: 0;
   }
  `
  }
    
    </style>
  </head>
    <body className="snippet-body body">
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Apply for a credit card form</h3>

            <div class="cardm">
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
                      onChange={()=>validate(1)}
                      onblur={()=>validate(1)}
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
                      onChange={()=>validate(2)}
                      onblur={()=>validate(2)}
                    />
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3"
                    >National ID<span class="text-danger"> *</span></label
                    >
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onChange={()=>validate(3)}
                      onblur={()=>validate(3)}
                    />
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3"
                    >First phone number<span class="text-danger">
                        *</span
                      ></label
                    >
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onChange={()=>validate(4)}
                      onblur={()=>validate(4)}
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
                      placeholder=""
                      onChange={()=>validate(5)}
                      onblur={()=>validate(5)}
                    />
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3"
                    >Second phone number<span class="text-danger"> </span
                    ></label>
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onChange={()=>validate(4)}
                      onblur={()=>validate(4)}
                    />
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-12 flex-column d-flex">
                    <label class="form-control-label px-3"
                    >What are your guarantees?<span class="text-danger">
                        *</span
                      ></label
                    >
                    <input
                      type="text"
                      id="ans"
                      name="ans"
                      placeholder=""
                      onblur={()=>validate(6)}
                      onChange={()=>validate(6)}
                    />
                  </div>
                </div>
               
                    <button  class="col-sm-6 btn-primary"
                    onClick={()=>{
                      if(validate(6)&&validate(5)&&validate(4)&&validate(3)&&validate(2)&&validate(1))
                      {alert("Your application has been submitted successfully");setView("BeginView")}
                    }}
                    >
                      Apply
                    </button>
                              </div>
          </div>
        </div>
      </div>

      <script
        type="text/javascript"
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
      ></script>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css"
        rel="stylesheet"
      />


      <script type="text/javascript" src="#"></script>
      <script type="text/javascript" src="#"></script>
      <script type="text/javascript" src="#"></script>
      <script type="text/javascript">
        {

        }
      </script>
      <script type="text/javascript">{
 

      }
   
    
      </script>
    </body>

</>
  )

}

export default Credit_Card