import React from 'react';
import './style.css';

const Admin = () => {
  const handleAnnouncements = () => {
    const announcementButton = document.getElementById("announcements");
    const notification = document.getElementById("notification");
    announcementButton.style.display = "none";
    notification.style.display = "inline";
  };

  return (
    <html lang="en">
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
          <div className="logo-container">
            <img src={require('./images/')} alt="Logo" className="logo-image" />
          </div>
          <nav className="navigation">
            <a href="#services">Handle Issues</a>
            <a href="#projects">Notify</a>
          </nav>
        </header>

        <section className="cards" id="services">
          <h2 className="title">Handle Issues</h2>
          <div className="content">
            <div className="card">
              <div className="icon">
                <i className="fa fa-credit-card" aria-hidden="true"></i>
              </div>
              <div className="info">
                <h3>Credit Card Issues</h3>
                <p>
                  handling credit card theft, loss, damage and applications for
                  replacement
                </p>
                <a href="card.html">
                  <button id="credit card">Handle</button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fas fa-money-check-alt"></i>
              </div>
              <div className="info">
                <h3>Transaction Failure</h3>
                <p>
                  identifying, diagnosing, and resolving issues that occur
                  during financial transactions
                </p>
                <a href="transaction.html">
                  <button id="transactions">Handle</button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fas fa-laptop"></i>
              </div>
              <div className="info">
                <h3>System Failure</h3>
                <p>
                  managing and resolving issues associated with the system
                  crash or its unablility to perform its intended functions
                </p>
                <a href="system.html">
                  <button id="system">Handle</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <h2 className="title">Notify</h2>
          <div className="content">
            <div className="card">
              <div className="icon">
                <i className="fas fa-check"></i>
              </div>
              <div className="info">
                <h3>issue resolution</h3>
                <p>
                  Notify the customers that their reported problems are resolved
                  successfully
                </p>
                <a href="resolution.html">
                  <button id="resolution">Notify</button>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <i className="fa fa-bullhorn"></i>
              </div>
              <div className="info">
                <h3>bank announcements</h3>
                <p>Notify the customers with the new bank announcements</p>
                <div style={{ marginBottom: "20px" }}></div>
                <span id="notification" className="hidden">
                  All the bank customers were notified successfully
                </span>
                <button id="announcements" onClick={handleAnnouncements}>
                  Notify All Customers
                </button>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};

export default Admin;













// import React from 'react'
// import style from './style.css'
// import newLogo from './images/newLogo.jpeg'
// const Admin = () => {
//     return (
//         <>
//             {/* <head>
//                 <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
//                                 <link rel="stylesheet" href="style.css">
//                                     <style>
//                                         #notification {
//                                             color: blue;
//         }
//                                         .hidden {
//                                             display: none;
//         }
//                                     </style>
//                                     <title>Admin Page</title>
//                                 </head> */}
//             <body>

//                 <header>
//                     <div class="logo-container">
//                         <img src={newLogo} alt="Logo" class="logo-image" />
//                     </div>
//                     <nav class="navigation">
//                         <a href="#services">Handle Issues</a>
//                         <a href="#projects">Notify</a>
//                     </nav>
//                 </header>




//                 <section class="cards" id="services">
//                     <h2 class="title">Handle Issues</h2>
//                     <div class="content">
//                         <div class="card">
//                             <div class="icon">
//                                 <i class="fa fa-credit-card" aria-hidden="true"></i>

//                             </div>
//                             <div class="info">
//                                 <h3>Credit Card Issues</h3>
//                                 <p>handling credit card theft, loss, damage and applications for replacement</p>
//                                 <a href="card.html">
//                                     <button id="credit card">Handle</button>
//                                 </a>
//                             </div>
//                         </div>
//                         <div class="card">
//                             <div class="icon">
//                                 <i class="fas fa-money-check-alt"></i>
//                             </div>
//                             <div class="info">
//                                 <h3>Transaction Failure</h3>
//                                 <p>identifying, diagnosing, and resolving issues that occur during financial transactions</p>
//                                 <a href="transaction.html">
//                                     <button id="transactions">Handle</button>
//                                 </a>
//                             </div>
//                         </div>
//                         <div class="card">
//                             <div class="icon">
//                                 <i class="fas fa-laptop"></i>
//                             </div>
//                             <div class="info">
//                                 <h3>System Failure</h3>
//                                 <p>managing and resolving issues associated with the system crash or its unablility to perform its intended functions</p>
//                                 <a href="system.html">
//                                     <button id="system">Handle</button>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section class="projects" id="projects">
//                     <h2 class="title">Notify</h2>
//                     <div class="content">
//                         <div class="card">
//                             <div class="icon">
//                                 <i class="fas fa-check"></i>
//                             </div>
//                             <div class="info">
//                                 <h3>issue resolution</h3>
//                                 <p>Notify the customers that their reported problems are resolved successfully </p>
//                                 <a href="resolution.html">
//                                     <button id="resolution">Notify</button>
//                                 </a>
//                             </div>
//                         </div>
//                         <div class="card">
//                             <div class="icon">
//                                 <i class="fa fa-bullhorn"></i>
//                             </div>
//                             <div class="info">
//                                 <h3>bank announcements</h3>
//                                 <p>Notify the customers with the new bank announcements</p>
//                                 <div style={{bottom:"20px"}}></div>
//                                 <span id="notification" class="hidden">All the bank customers were notified successfully</span>

//                                 <button id="announcements"> Notify All Customers</button>
//                             </div>
//                         </div>

//                     </div>
//                 </section>

//                 {/* <script>
//                                     document.getElementById("announcements").addEventListener("click", function() {
//                                         this.style.display = "none";
//                                     document.getElementById("notification").style.display = "inline";
//         });
//                                 </script> */}

//             </body>


//         </>)
// }

// export default Admin