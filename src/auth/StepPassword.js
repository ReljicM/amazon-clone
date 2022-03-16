import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { db } from '../firebase'

function StepPassword({ prevStep, handleFormData, values }) {

  const navigate = useNavigate();
  const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();
        if (values.password !== "") {
            setError(false)
        } else {
            setError(true);
        }
      }

    const signin = e => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
    }

  return (
    <div className="login__container">
    <h1>Sign-in</h1>
    <div className="login__showData">
    <p>{values.email}</p> 

    <button onClick={prevStep}>Change</button>
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

        <button type="submit" onClick={signin} className="login__signInButton">Sign-In</button>
    </form>
    <div className="login__checkbox">
        <input type="checkBox" />
        <p>
        Keep me signed in.
        </p>
    </div>
    

</div>
  )
}

export default StepPassword