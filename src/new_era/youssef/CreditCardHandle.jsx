import React, { useState } from 'react'

const CreditCard = () => {
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
        <header>
          <div class="logo-container">
            <img src={require('./images/newLogo.jpeg')} alt="Logo" class="logo-image"/>
          </div>
          <nav class="navigation">

          </nav>
        </header>
        <section class="cards" id="services">
          <h2 class="title">Credit Cards Issues</h2>
          <div class="content">
            <div class="card">
              <div class="icon">
                <i class="fas fa-user"></i>

              </div>
              <div class="info">
                <h3>Customer 1</h3>
                <p>My credit card was stolen and I want to deactivate it</p>
                <div style={{ bottom: "20px" }}></div>
                <span id="firstbutton" class={!firstVisible ? "hidden" : null}
                style={{color:"blue"}}
                >Your credit card is deactivated   </span>

                <button id="credit card" class={firstVisible ? "hidden" : null}
                                onClick={() => setFirstVisible(!firstVisible)}>Handle</button>
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <i class="fas fa-user"></i>

              </div>
              <div class="info">
                <h3>Customer 2</h3>
                <p>My credit card was lost , and I want to apply for replacement</p>
                <div style={{ bottom: "20px" }}></div>
                <span id="secondbutton" class={!secondVisible ? "hidden" : null} style={{color:"blue"}}>The issue is handled successfully   </span>

                <button id="transactions"
                class={secondVisible ? "hidden" : null}
                onClick={() => setSecondVisible(!secondVisible)}>Handle</button>

              </div>
            </div>

          </div>
      </section>

      {/* <script>
        document.getElementById("credit card").addEventListener("click", function() {
          this.style.display = "none";
        document.getElementById("firstbutton").style.display = "inline";
        });
        document.getElementById("transactions").addEventListener("click", function() {
          this.style.display = "none";
        document.getElementById("secondbutton").style.display = "inline";
        });
      </script> */}

    </body >




    </>)
}

export default CreditCard