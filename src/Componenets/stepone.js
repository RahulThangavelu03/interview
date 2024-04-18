import React from "react"

import StepTwo from "./stepTwo"
import { Link } from "react-router-dom"

import { useState } from "react"
function Stepone() {


    const userinput = useState({
        name: "",
        email: ""

    })


    function HandleChange() {



    }


    return (
        <div>
            <h2>Step one</h2>

            <form>
                <input type="text" name="name" placeholder="enter  name..." required onChange={HandleChange}></input><br /><br />
                <input type="email" name="email" placeholder="enter  email" required onChange={HandleChange}></input><br /><br />

                <Link to="/second" element={<StepTwo></StepTwo>}>page two</Link>

            </form>


        </div>

    )

}

export default Stepone