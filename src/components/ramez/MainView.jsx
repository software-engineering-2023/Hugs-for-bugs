import React from 'react'
// import Credit_Card from './mohamed/Apply_for_a_credit_card/Credit_Card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
const MainView = () => {
  


  return (
    <>

      <button type="button" class="btn btn-light position-absolute"
        style={{ top: "25px", right: "30px" }}
      >Login</button>
      <button type="button" class="btn btn-outline-light position-absolute"
        style={{ top: "25px", right: "110px" }}>Sign Up</button>


      <div className="dropdown position-absolute  text-white" style={{ top: "25px", right: "510px" }}>
        <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Transactions
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Action two</a></li>
          <li><a class="dropdown-item" href="#">Action three</a></li>
        </ul>
      </div>


      <div className="dropdown position-absolute  text-white" style={{ top: "25px", right: "720px" }}>
        <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Cards
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Action two</a></li>
          <li><a class="dropdown-item" href="#">Action three</a></li>
        </ul>
      </div>


      <div className="dropdown position-absolute  text-white" style={{ top: "25px", right: "910px" }}>
        <button class="btn btn-secondary dropdown-toggle bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Bills
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Action two</a></li>
          <li><a class="dropdown-item" href="#">Action three</a></li>
        </ul>
      </div>





      <img class="position-absolute"
        style={{ top: "5px", left: "50px" }}
        src={require('./logo.png')}>
      </img>

      <text class="position-absolute text-lg" style={{ color: 'white', top: "30px", left: "120px", fontSize: "2rem", font: "bold" }}>RYMM</text>



      <img class="position-absolute"
        style={{ width: "25%", height: "50%", top: "170px", right: "150px" }}
        src={require('./mobile2.png')}>
      </img>



      <div
        style={{
          backgroundColor: '#0B173B',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '80px'
        }}
      >
      </div>


      <div className='position-absolute' style={{ left: "50px", top: "80px " }}>
        <text style={{ color: '#0B173B', fontSize: "6rem", fontWeight: "bold" }}>
          Save your <br />Money with RYMM</text>
      </div>
      <div className='position-absolute' style={{ left: "50px", top: "380px " }}>
        Discover a new era of banking with RYMM Bank. Experience the power of personalized financial solutions tailored to your needs.<br />
        From seamless digital banking to expert financial guidance, RYMM Bank is committed to helping you achieve your financial goals.
      </div>



      <button type="button" class="btn btn-primary btn-lg position-absolute"
        style={{ left: "50px", top: "450px " }}>Open Account</button>
      <button type="button" class="btn btn-outline-dark btn-lg position-absolute"
        style={{ left: "250px", top: "450px " }}>See your accounts</button>


      <div className='position-absolute' style={{ left: "50px", top: "520px " }}>
        <text style={{ color: '#0B0B61', fontSize: "3rem", fontWeight: "bold" }}>
           +$500M</text>
      </div>
      <div className='position-absolute' style={{ left: "50px", top: "590px " }}>
        <text style={{ color: '#0B173B', fontSize: "1rem" }}>
           in assets under managment</text>
      </div>

      <div className='position-absolute' style={{ left: "300px", top: "520px " }}>
        <text style={{ color: '#0B0B61', fontSize: "3rem", fontWeight: "bold" }}>
           +$40M</text>
      </div>
      <div className='position-absolute' style={{ left: "300px", top: "590px " }}>
        <text style={{ color: '#0B173B', fontSize: "1rem" }}>
           in monthly trading volume</text>
      </div>


      <div className='position-absolute' style={{ left: "550px", top: "520px " }}>
        <text style={{ color: '#0B0B61', fontSize: "3rem", fontWeight: "bold" }}>
           +8</text>
      </div>
      <div className='position-absolute' style={{ left: "550px", top: "590px " }}>
        <text style={{ color: '#0B173B', fontSize: "1rem" }}>
           years  in fintech</text>
      </div>


    </>
  )






}

export default MainView
