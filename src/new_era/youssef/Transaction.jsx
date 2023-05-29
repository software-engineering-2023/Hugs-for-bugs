import React, { useState } from 'react'

const Transaction = () => {
    const [firstVisible, setFirstVisible] = useState(false);
    const [secondVisible, setSecondVisible] = useState(false);

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
            <body>
                <section class="cards" id="services">
                    <h2 class="title">Transaction Issues</h2>
                    <div class="content">
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-money-check-alt"></i>

                            </div>
                            <div class="info">
                                <h3>Transaction  1</h3>
                                <p>The transaction failed due to incorrect payment details</p>
                                <div style={{ bottom: "20px" }}></div>
                                <span id="first" class={!firstVisible ? "hidden" : null}>Enter the transaction's details again</span>

                                <button id="firstbutton" class={firstVisible ? "hidden" : null}
                                onClick={() => setFirstVisible(!firstVisible)}>Handle</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="icon">
                                <i class="fas fa-money-check-alt"></i>

                            </div>
                            <div class="info">
                                <h3>Transaction 2</h3>

                                <p>The transaction failed due to technical issues </p>
                                <div style={{ bottom: "20px" }}></div>
                                <span id="second" class={!secondVisible ? "hidden" : null}>The techincal issues are resolved </span>

                                <button id="secondbutton" class={secondVisible ? "hidden" : null}
                                onClick={() => setSecondVisible(!secondVisible)}>Handle</button>

                            </div>
                        </div>

                    </div>
                </section >
            </body>
        </>
    )
}

export default Transaction