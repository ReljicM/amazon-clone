import React, { useState } from 'react'

function StepPassword({ nextStep, handleFormData, values }) {
    const [error, setError] = useState(false);


    const submitFormData = (e) => {
        e.preventDefault();
        if (values.password !== "") {
            
            nextStep();
        } else {
            setError(true);
        }
        
    }

  return (
    <div className="login__container">
    <h1>Sign-in</h1>
    <div className="login__showData">
    <p>{values.email}</p> 
    <button>Change</button>
    </div>
    

    <form onSubmit={submitFormData}>
        <h5>Password</h5>
        <input
        style={{ border: error ? "2px solid red" : "" }}
        defaultValue={values.password}
        onChange={handleFormData("password")}
         type="text" />
         {error ? (
                <p style={{ color: "red" }}>
                  Enter your password
                </p>
              ) : (
                ""
              )}

        <button className="login__signInButton">Sign-In</button>
    </form>

    <p>
    Keep me signed in.
    </p>

    <button className="login__registerButton">Create your Amazon Account</button>
</div>
  )
}

export default StepPassword