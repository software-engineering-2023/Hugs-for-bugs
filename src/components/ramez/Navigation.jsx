import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = ({ setView }) => {
    return (
        <>
            <header>
                <img class="position-absolute"
                    style={{ top: "-25px", left: "50px" }}
                    src={require('./images/logo.png')}>
                </img>


                <text class="position-absolute text-lg" style={{ color: 'white', top: "30px", left: "40px", fontSize: "2rem", font: "bold" }}>
                    RYMM</text>

                <nav className="navigation">

                    <Link to={`/`}>
                        <button type="button" class="btn btn-light position-absolute"
                            style={{ top: "20px", right: "30px" }}
                        >Logout</button>
                    </Link>
                    <img class="position-absolute" src={require('../ramez/images/notification.png')}
                        style={{ top: "14px", right: "310px", size: "50%" }}
                        onClick={() => setView("Notifications_reminders")}
                    />

                    <text onClick={() => setView("BeginView")} style={{ right: "250px", color: "white", top: "29px" }} class="position-absolute">
                        Home</text>


                    <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "510px" }}>
                        <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Transactions
                        </button>
                        <ul class="dropdown-menu">
                            <li onClick={() => setView("View_bank_account_transactions")}><a class="dropdown-item text-black" href="#" >View bank account transactions</a></li>
                            <li onClick={() => setView("View_credit_card_transactions")}><a class="dropdown-item text-black" href="#">View credit card transactions</a></li>
                        </ul>
                    </div>
                    <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "720px" }}>
                        <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Apply
                        </button>
                        <ul class="dropdown-menu">
                            <li onClick={() => setView("Credit_Card")}>

                                <a class="dropdown-item text-black" href="#">Apply for Credit Card</a>
                            </li>
                            <li
                                onClick={() => setView("Apply_for_a_loan")}
                            ><a class="dropdown-item text-black" href="#">Apply for a loan</a></li>
                        </ul>
                    </div>
                    <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "910px" }}>
                        <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Bills
                        </button>
                        <ul class="dropdown-menu">
                            <li onClick={() => setView("BillPaymentReminder")}>
                                <a class="dropdown-item text-black" href="#">Bill_Payment_Reminder</a></li>
                            <li onClick={() => setView("BillsPayment")}
                            ><a class="dropdown-item text-black" href="#">Bills Payment</a></li>
                            <li onClick={() => setView("CreditCardBills")}
                            ><a class="dropdown-item text-black" href="#">Credit Card Bills</a></li>

                        </ul>
                    </div>

                    <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "1110px" }}>
                        <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Report
                        </button>
                        <ul class="dropdown-menu">
                            <li onClick={() => setView("CreditCardIssue")}>
                                <a class="dropdown-item text-black" href="#">Credit Card Issue</a></li>
                            <li onClick={() => setView("TechnicalIssue")}
                            ><a class="dropdown-item text-black" href="#">TecknicalIssue</a></li>
                        </ul>
                    </div>

                    <li onClick={() => setView("ViewPoints")} 
                    style={{ top: "0px", right: "1110px" }}
                    ><a class="dropdown-item text-black" href="#">View Points</a></li>



                </nav>
            </header>


            {/* <div>  <button type="button" class="btn btn-light position-absolute"
                style={{ top: "20px", right: "30px" }}
                onClick={() => setView("Login")} >Login</button>
                <button type="button" class="btn btn-outline-light position-absolute"
                    onClick={() => setView("SignUp")} style={{ top: "20px", right: "110px" }}>Sign Up</button>


                <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "510px" }}>
                    <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Transactions
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Action two</a></li>
                        <li><a class="dropdown-item" href="#">Action three</a></li>
                    </ul>
                </div>


                <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "720px" }}>
                    <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cards
                    </button>
                    <ul class="dropdown-menu">
                        <li onClick={() => setView("Credit_Card")}>

                            <a class="dropdown-item" href="#">Apply for Credit Card</a>
                        </li>
                        <li><a class="dropdown-item" href="#">Action two</a></li>
                        <li><a class="dropdown-item" href="#">Action three</a></li>
                    </ul>
                </div>


                <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "910px" }}>
                    <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Bills
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Action two</a></li>
                        <li><a class="dropdown-item" href="#">Action three</a></li>
                    </ul>
                </div>

                <div
                    style={{
                        backgroundColor: '#0B173B',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: '80px'
                    }}
                >
                </div>



                <img class="position-absolute"
                    style={{ top: "-25px", left: "50px" }}
                    src={require('./images/logo.png')}>
                </img>

                <text class="position-absolute text-lg" style={{ color: 'white', top: "30px", left: "40px", fontSize: "2rem", font: "bold" }}>
                    RYMM</text>


                <text class="position-absolute text-lg" style={{ color: 'white', top: "28px", right: "230px", fontSize: "1rem", font: "bold" }}
                    onClick={() => setView("BeginView")}
                >
                    Home</text>

            </div> */}
        </>
    )
}

export default Navigation