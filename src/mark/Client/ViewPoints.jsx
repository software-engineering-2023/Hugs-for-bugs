import React, { useState } from "react";

const BankSystem = () => {
  const [cards, setCards] = useState([
    { id: 101, type: "Rewards Card", points: 1000, showInput: false, valid: true },
    { id: 102, type: "Travel Card", points: 500, showInput: false, valid: true },
    { id: 103, type: "Cashback Card", points: 2000, showInput: false, valid: true }
  ]);

  const toggleInput = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].showInput = !updatedCards[index].showInput;
    setCards(updatedCards);
  };

  const redeemPoints = (index, pointsToRedeem) => {
    const updatedCards = [...cards];
    const availablePoints = updatedCards[index].points;

    if (isNaN(pointsToRedeem)) {
      updatedCards[index].message = "Invalid points entered. Please enter a valid number.";
    } else if (pointsToRedeem > availablePoints) {
      updatedCards[index].message = `You can only redeem up to ${availablePoints} points.`;
    } else {
      updatedCards[index].points -= pointsToRedeem;
      updatedCards[index].message = "Points redeemed successfully!";
      updatedCards[index].showInput = true;
      updatedCards[index].valid = false;
    }

    setCards(updatedCards);
  };

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bank System</title>
        <style>
          {` body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding-top: 100px;
      padding: 0;
      background-color: #f0f0f0;
    }

    .containerm {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      padding-top: 100px;

    }

    h1 {
      text-align: center;
      color: #333;
    }

    .cardm {
      background-color: #fff;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card h3 {
      margin-top: 0;
    }

    .card p {
      margin: 5px 0;
    }

    .btn-container {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    .points-section {
      display: none;
      margin-top: 20px;
    }

    .points-section input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }

    .message {
      margin-top: 10px;
      color: green;
      font-weight: bold;
    }

    .btnm {
      display: block;
      width: 100%;
      max-width: 200px;
      padding: 12px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      color: #fff;
      background-color: #5a99dd;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn:hover {
      background-color: #0056b3;
    }
    `}
        </style>
      </head>
      <body>
        <div class="containerm">
          <h1>Bank System</h1>

          <div class="cardm">
            <h3>Credit Card 1</h3>
            <p>ID: 101</p>
            <p>Type: Rewards Card</p>
            <p class="points">Points: {cards[0].points}</p>
            <div class="btn-container">
              <button class="redeem-btn btnm" onClick={() => toggleInput(0)}>Redeem Points</button>
            </div>

            <div class={`${cards[0].showInput ? "hidden" : null}`}>
              <input type="number" class="points-to-redeem" placeholder="Enter points to redeem" />
              <button class="confirm-btn btnm" onClick={() => {
                redeemPoints(0, document.querySelector(".points-to-redeem").value);

              }}>Confirm</button>
            </div>
            <div class={` message `}>{cards[0].message}</div>

          </div>

          <div class="cardm">
            <h3>Credit Card 2</h3>
            <p>ID: 102</p>
            <p>Type: Travel Card</p>
            <p class="points">Points: {cards[1].points}</p>
            <div class="btn-container">
              <button class="redeem-btn btnm" onClick={() => toggleInput(1)}>Redeem Points</button>
            </div>

            <div class={`${cards[1].showInput ? "hidden" : null}`}>
              <input type="number" class="points-to-redeem1" placeholder="Enter points to redeem" />
              <button class="confirm-btn btnm" onClick={() => {
                redeemPoints(1, document.querySelector(".points-to-redeem1").value);

              }}>Confirm</button>
            </div>
            <div class={`message`}>{cards[1].message}</div>
          </div>

          <div class="cardm">
            <h3>Credit Card 3</h3>
            <p>ID: 103</p>
            <p>Type: Cashback Card</p>
            <p class="points">Points: {cards[2].points}</p>
            <div class="btn-container">
              <button class="redeem-btn btnm" onClick={() => toggleInput(2)}>Redeem Points</button>
            </div>

            <div class={`${cards[2].showInput ? "hidden" : null}`}>
              <input type="number" class="points-to-redeem2" placeholder="Enter points to redeem" />
              <button class="confirm-btn btnm" onClick={() => {
                redeemPoints(2, document.querySelector(".points-to-redeem2").value);
              }}>Confirm</button>
            </div>
            <div class={`message`}>{cards[2].message}</div>
          </div>

          <script>

          </script>
        </div>
      </body>

    </>
  );
};

// Inline styles
const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",

};

const headingStyle = {
  textAlign: "center",
  color: "#333",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const pointsStyle = {
  marginTop: "0",
};

const buttonStyle = {
  display: "block",
  width: "100%",
  maxWidth: "400px",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#5a99dd",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  boxSizing: "border-box",
};

const messageStyle = {
  marginTop: "10px",
  color: "green",
  fontWeight: "bold",
};

export default BankSystem;
