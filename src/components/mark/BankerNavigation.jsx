import React from "react";
import { Link } from "react-router-dom";


const BankerNavigation = ({ setView }) => {
    return (

        <>
            <header>
                <div className="logo-container">
                    <img src={require('../ramez/images/logo.png')} alt="Logo" className="logo-image" />
                </div>
                <nav className="navigation">

                    
                    <a style={{ color: "white" }} onClick={() => setView("BankerLoan")}>Handle Loans</a>
                    <a style={{ color: "white" }} onClick={() => setView("HandleCredit")}>Credit Cards</a>
                    <Link to={`/`}>
                        <button type="button" class="btn btn-light"
                        >Logout</button>
                    </Link>
                </nav>
            </header>
            <div>


                {/* <div className="dropdown position-absolute  text-white" style={{ top: "20px", right: "510px" }}>
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
            </div> */}

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
                    src={require('../ramez/images/logo.png')}>
                </img>

                <text class="position-absolute text-lg" style={{ color: 'white', top: "30px", left: "40px", fontSize: "2rem", font: "bold" }}>
                    RYMM</text>


                {/* <text class="position-absolute text-lg" style={{ color: 'white', top: "28px", right: "230px", fontSize: "1rem", font: "bold" }}
                onClick={() => setView("BeginView")}
            >
                Home</text> */}

            </div>

        </>
    )
}

export default BankerNavigation;




