import React from 'react'
import { useState } from 'react';
const Sytem = () => {

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
                <div class="logo-container">
                    <img src={require('./images/newLogo.jpeg')} alt="Logo" class="logo-image" />
                </div>
                <nav class="navigation">

                </nav>
            </header>
            <section class="cards" id="services">
                <h2 class="title">System Issues</h2>
                <div class="content">
                    <div class="card">
                        <div class="icon">
                            <i class="fas fa-globe"></i>

                        </div>
                        <div class="info">
                            <h3>Network failure </h3>
                            <p>The system crashed due to loss of connectivity</p>
                            <div style={{ bottom: "20px" }}></div>
                            <span id="first" style={{ color: "blue" }} class={!firstVisible ? "hidden" : null}>The connectivity was restored </span>
                            <button id="firstbutton" class={firstVisible ? "hidden" : null}
                                onClick={() => setFirstVisible(!firstVisible)}>Handle</button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="icon">
                            <i class="fas fa-table"></i>

                        </div>
                        <div class="info">
                            <h3>Data loss </h3>
                            <p>The system crashed due to some loss of data   </p>
                            <div style={{ bottom: "20px" }}></div>
                            <span id="second" style={{ color: "blue" }} class={!secondVisible ? "hidden" : null}>The data was recovered</span>

                            <button id="secondbutton" class={secondVisible ? "hidden" : null}
                                onClick={() => setSecondVisible(!secondVisible)}
                            >Handle</button>

                        </div>
                    </div>
                    <div class="card">
                        <div class="icon">
                            <i class="fas fa-bug"></i>

                        </div>
                        <div class="info">
                            <h3>Software bug</h3>
                            <p>The system crashed due to a software bug  </p>
                            <div style={{ bottom: "20px" }}></div>
                            <span id="third" style={{ color: "blue" }} class={!thirdVisible ? "hidden" : null}>The bug was resolved </span>

                            <button id="thirdbutton" class={thirdVisible ? "hidden" : null}
                                onClick={() => setThirdVisible(!thirdVisible)}>Handle</button>

                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default Sytem