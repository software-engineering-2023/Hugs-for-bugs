import React from 'react'

const beginView = () => {
  return (
    <div  >
    <img class="position-absolute"
      style={{ width: "25%", height: "50%", top: "170px", right: "150px" }}
      src={require('./images/mobile2.png')}>
    </img>



   


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
    </div></div>
  )
}

export default beginView