import React from 'react'

const BeginNavigation = ({ setView }) => {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={require('../ramez/images/logo.png')} alt="Logo" className="logo-image" />
                </div>

                <nav className="navigation">
                    <button type="button" class="btn btn-light position-absolute"
                        style={{ top: "20px", right: "30px" }}
                        onClick={() => setView("Login")} >Login</button>
                    <button type="button" class="btn btn-outline-light position-absolute"
                        onClick={() => setView("SignUp")} style={{ top: "20px", right: "110px" }}>Sign Up</button>

                </nav>
            </header>


        </>
    )
}

export default BeginNavigation