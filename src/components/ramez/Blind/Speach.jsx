import React, { useEffect, useState } from "react";


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'
function Speach() {
  const [isListening, setIsListening] = useState(true)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  const onMic = () => {
    setIsListening(true);
    mic.start()
    mic.onend = () => {
      console.log('continue..')
    }
  }
  const offMic = () => {
    setIsListening(false)
    mic.stop()
    mic.onend = () => {
      console.log('Stopped Mic on Click')
    }
    handleSaveNote();
    setNote('')
  }

  mic.onresult = event => {
    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')
    console.log(transcript)
    setNote(transcript)
    mic.onerror = event => {
      console.log(event.error)
    }
  }
  const handleSaveNote = () => {
    setSavedNotes([note, ...savedNotes])
    setNote('')
  }








  const [ourText, setOurText] = useState("")
  const msg = new SpeechSynthesisUtterance()

  // useEffect(() => {
  //   msg.text = "Welcome to our banking assistance service for visually impaired individuals."
  //   // Please listen to the following options and speak the option number to access the desired service:  Option 1: Register to use the web application (if you already have a bank account). Option 2: Open or close a bank account."
  //   //Option 3: Apply for a credit card. Option 4: Apply for a personal or car loan. Option 5: View your bank account transactions. Option 6: View your credit card transactions. Option 7: View your credit card points and redeem them for cashback. Option 8: Pay your credit card bill partially or in full. Option 9: Transfer money to other bank accounts (internal, domestic, or international). Option 10: Set and receive reminders for payments due for gas, electricity, water, or telephone bills. Option 11: Receive reminders for payments due for loans or credit card bills. Option 12: Pay your gas, water, electricity, or telephone bills through a third-party app (optional) or through the bank itself (mandatory). Option 13: Report technical issues with the system. Option 14: Receive notifications about issue resolution and bank announcements. Option 15: Report credit card theft, loss, damage, or apply for a replacement.  Please speak the option number you wish to access.    "
  //   window.speechSynthesis.speak(msg)
  // });

  useEffect(() => {
    speakWelcomeMessage();
  }, []);

  function speakWelcomeMessage() {
    const msg = new SpeechSynthesisUtterance();
    msg.text =
      "Welcome to our banking assistance service for visually impaired individuals. Please listen to the following options and speak the option number to access the desired service: Option 1: Register to use the web application (if you already have a bank account). Option 2: Open or close a bank account. Option 3: Apply for a credit card. Option 4: Apply for a personal or car loan. Option 5: View your bank account transactions. Option 6: View your credit card transactions. Option 7: View your credit card points and redeem them for cashback. Option 8: Pay your credit card bill partially or in full. Option 9: Transfer money to other bank accounts (internal, domestic, or international). Option 10: Set and receive reminders for payments due for gas, electricity, water, or telephone bills. Option 11: Receive reminders for payments due for loans or credit card bills. Option 12: Pay your gas, water, electricity, or telephone bills through a third-party app (optional) or through the bank itself (mandatory). Option 13: Report technical issues with the system. Option 14: Receive notifications about issue resolution and bank announcements. Option 15: Report credit card theft, loss, damage, or apply for a replacement. Please speak the option number you wish to access.";
    window.speechSynthesis.speak(msg);
  }

  function keyPressHandler(event) {
    if (event.key === " ") {
      if (isListening) {
        offMic();
      } else {
        onMic();
      }
    }
  }

  return (
    <>


      <input
        className="position-absolute"
        style={{ width: "5%", height: "1%", top: "-170px", right: "150px" }}
        autoFocus
        type="text"
        onKeyPress={keyPressHandler}
      />
      <h1 className="d-flex justify-content-center">Blind Mode</h1>
      <div className="container">
        <div className="box position-absolute" style={{ left: "100px" }}>
          <h2>Current Command</h2>
          {!isListening ? <span>🎙️</span> : <span>🛑</span>}
          <button onClick={() => { isListening ? offMic() : onMic() }}>
            Enter Space      </button>
          <p>{note}</p>
        </div>
        <div className="box position-absolute" style={{ right: "100px" }}>
          <h2>Commads</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div>
      </div>






      <text class="d-flex justify-content-center  position-absolute fw-bold" style={{ color: 'black', left: "620px", top: "200px", fontSize: "6rem", font: "bold" }}>
        RYMM</text>

    </>
  )
}

export default Speach


// Begin  // Welcome to our banking assistance service for visually impaired individuals. Please listen to the following options and speak the option number to access the desired service:  Option 1: Register to use the web application (if you already have a bank account). Option 2: Open or close a bank account. Option 3: Apply for a credit card. Option 4: Apply for a personal or car loan. Option 5: View your bank account transactions. Option 6: View your credit card transactions. Option 7: View your credit card points and redeem them for cashback. Option 8: Pay your credit card bill partially or in full. Option 9: Transfer money to other bank accounts (internal, domestic, or international). Option 10: Set and receive reminders for payments due for gas, electricity, water, or telephone bills. Option 11: Receive reminders for payments due for loans or credit card bills. Option 12: Pay your gas, water, electricity, or telephone bills through a third-party app (optional) or through the bank itself (mandatory). Option 13: Report technical issues with the system. Option 14: Receive notifications about issue resolution and bank announcements. Option 15: Report credit card theft, loss, damage, or apply for a replacement.  Please speak the option number you wish to access.
// 