import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StepEmail from './StepEmail'
import StepPassword from './StepPassword'
import './Login.css'

function Login() {
  // state for steps
  const [step, setStep] = useState(1);

  // state for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const nextStep = () => {
    setStep( step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        
        <div className="login">
          <Link to="/">
        <img
        className="login__logo"
         src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"/>
        </Link>
            <StepEmail nextStep={nextStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="login">
          <Link to="/">
        <img
        className="login__logo"
         src="https://www.synointcdn.com/wp-content/uploads/2019/04/Amazon-Logo-PNG.png"/>
        </Link>
            <StepPassword nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
        </div>
      );
      // Only formData is passed as prop to show the final value at form submit
   
  }
}
  

export default Login