import React from "react"

function StepTwo() {





    function HandleChange() {


    }


    function HandleClick() {




    }



    return (
        <div>
            <h2>Step Two</h2>




            <form onSubmit={HandleClick}>
                <input type="text" name="name" placeholder="enter  number" required onChange={HandleChange}></input><br /><br />
                <input type="text" name="email" placeholder="enter  id" required onChange={HandleChange}></input><br /><br />

                <input type="submit"></input>

            </form>

        </div>

    )

}

export default StepTwo



