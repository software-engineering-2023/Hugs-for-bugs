import React, { useState, useEffect } from 'react'
// import './App.css'

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Blind() {
    const [isListening, setIsListening] = useState(false)
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
        setSavedNotes([...savedNotes, note])
        setNote('')
    }

    return (
        <>
            <h1>Blind Mode</h1>
            <div className="container">
                <div className="box">
                    <h2>Current Command</h2>
                    {!isListening ? <span>🎙️</span> : <span>🛑</span>}
                    <button onClick={() => { isListening ? offMic() : onMic() }}>
                        Do it!!       </button>
                    <p>{note}</p>
                </div>
                <div className="box">
                    <h2>Commads</h2>
                    {savedNotes.map(n => (
                        <p key={n}>{n}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blind
