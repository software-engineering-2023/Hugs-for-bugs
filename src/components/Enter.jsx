import React, { useState } from 'react'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import background from './pxfuel.jpg'
import Login from './Login';
import Register from './Register';

function Enter() {

    let login = false;
    let setlogin = () => { }
    [login, setlogin] = useState(false)
    return (
        <section class="vh-100">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                        <img src={background}
                            class="img-fluid rounded-5" alt="Sample image" />
                    </div>
                    <Login   onClick={()=>{setlogin(true)}}>{login}</Login>
                    {/* <Register    onClick={()=>{setlogin(true)}}>{!login}</Register> */}
                </div>
            </div>
            <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-2 px-xl-4 bg-primary">
                    Copyright © 2020. All rights reserved.
            </div>
        </section>

    )
}

export default Enter