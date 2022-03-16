import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function StepEmail({ nextStep, handleFormData, values }) {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);


    const submitFormData = (e) => {
        e.preventDefault();
        if (values.email !== "") {
            
            nextStep();
        } else {
            setError(true);
        }
        
    }
  return (
    <>
      <div className="login__container">
              <h1>Sign-in</h1>

              <form onSubmit={submitFormData}>
                  <h5>Email or mobile phone number</h5>
                  <input
                  style={{borderColor: error ? "#d00"  : "" }}
                  defaultValue={values.email}
                  onChange={handleFormData("email")}

                  type="text" />

                  {error ? (
                  <p style={{ color: "red" }}>
                    Enter your email
                  </p>
                ) : (
                  ""
                )}

                  <button className="login__signInButton">Continue</button>
              </form>

              <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
              </p>
          </div>
          <Link to='/register'>
            <div className="login__divider">
              <hr className="login__divider_left"/>New to Amazon?<hr className="login__divider_right" />
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
          </Link>
        </>
  )
}

export default StepEmail