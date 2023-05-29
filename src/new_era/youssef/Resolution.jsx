import React, { useState } from 'react';
import './style.css';

const Resolution = () => {
    const [firstVisible, setFirstVisible] = useState(false);
    const [secondVisible, setSecondVisible] = useState(false);
    const [thirdVisible, setThirdVisible] = useState(false);
    return (
        <>

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                />
                <link rel="stylesheet" href="style.css" />
                <style>
                    {`
          #notification {
            color: blue;
          }
          .hidden {
            display: none;
          }
          `}
                </style>
                <title>Admin Page</title>
            </head>
            <header>
                <div className="logo-container">
                    <img src={require('./images/newLogo.jpeg')} alt="Logo" className="logo-image" />
                </div>
                <nav className="navigation"></nav>
            </header>
            <section className="cards" id="services">
                <h2 className="title">Issue Resolution</h2>
                <div className="content">
                    <div className="card">
                        <div className="icon">
                            <i className="fa fa-credit-card" aria-hidden="true"></i>
                        </div>
                        <div className="info">
                            <h3>Credit Card Issues</h3>
                            <p>Notifying clients of effective management of credit card concerns</p>
                            <div style={{ marginBottom: '20px' }}></div>
                            {firstVisible && (
                                <span id="first" style={{ color: "blue" }}>Customers with these issues were notified successfully</span>
                            )}
                            {!firstVisible ? <button id="firstbutton" onClick={setFirstVisible(!firstVisible)}>
                                Notify
                            </button> : null
                            }
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-money-check-alt"></i>
                        </div>
                        <div className="info">
                            <h3>Transaction Failure</h3>
                            <p>Notifying clients of effective management of the unsuccessful transactions</p>
                            <div style={{ marginBottom: '20px' }}></div>
                            {secondVisible && (
                                <span id="second" style={{ color: "blue" }}>Customers with these issues were notified successfully</span>
                            )}
                            {!firstVisible ? <button id="secondbutton" onClick={setSecondVisible(!secondVisible)}>
                                Notify
                            </button> : null
                            }
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fas fa-laptop"></i>
                        </div>
                        <div className="info">
                            <h3>System Failure</h3>
                            <p>Notifying clients of effective management of the system failure</p>
                            <div style={{ marginBottom: '20px' }}></div>
                            {thirdVisible && (
                                <span id="third" style={{ color: "blue" }}>Customers with these issues were notified successfully</span>
                            )}

                            {!thirdVisible ? <button id="thirdbutton" onClick={setThirdVisible(!thirdVisible)}>
                                Notify
                            </button> : null
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resolution;
