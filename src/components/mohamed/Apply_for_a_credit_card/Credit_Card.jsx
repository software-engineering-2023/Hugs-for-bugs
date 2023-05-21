import React from 'react'
import './style.css'
import { useLocation } from 'react-router-dom';

const Credit_Card = () => {
  let myLink = document.querySelector('a[href="#"]');
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

    <body className="snippet-body">
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Apply for a credit card form</h3>

            <div class="card">
              <form class="form-card" onsubmit="event.preventDefault()">
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
                      onblur={() => validate(1)}
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
                      onblur={() => validate(2)}
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
                      onblur={() => validate(3)}
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
                      onblur={() => validate(4)}
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
                      onblur={() => validate(5)}
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
                      onblur={() => validate(4)}
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
                      onblur={() => validate(6)}
                    />
                  </div>
                </div>
                <div class="row justify-content-end">
                  <div class="form-group col-sm-6">
                    <button type="submit" class="btn-block btn-primary">
                      Apply
                    </button>
                  </div>
                </div>
              </form>
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


  )

}

export default Credit_Card