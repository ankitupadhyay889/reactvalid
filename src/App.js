import { useState } from "react";
import "./App.css";

function App() {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: ""
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({...formInput,[name]: value,});
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {username: "", password: "", confirmPassword: "", gender: "", age: ""};

    if (!formInput.username && !formInput.password) {
      setFormError({
        ...inputError,
        username: "Enter username",
        password: "Password should not be empty",
      });
      return
    }

    if (!formInput.username) {
      setFormError({...inputError,username: "Enter username"});
      return
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({...inputError,confirmPassword: "Password and confirm password should be same"});
      return;
    }

    if (!formInput.password) {
      setFormError({...inputError,password: "Password should not be empty"});
      return
    }

    if (!formInput.gender) {
      setFormError({...inputError,gender: "Select gender"});
      return
    }

    if (!formInput.age) {
      setFormError({...inputError,age: "Enter age"});
      return
    }

    setFormError(inputError);
  };

  return (
    <div className="App">
        <div>
          <h4>Simple Form</h4>
        </div>

        <div>
          <form onSubmit={validateFormInput}>
            <p>Username</p>
            <input
              value={formInput.username}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="username"
              type="text"
              placeholder="Enter Username"
            />
            <p className="error-message">{formError.username}</p>

            <p>Password</p>
            <input
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="password"
              type="password"
              placeholder="Password"
            />
            <p className="error-message">{formError.password}</p>

            <p>Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>

            <p>Gender</p>
            <div onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}>
            <input
              value="Male"
              name="gender"
              type="radio"
            />Male
            <input
              value="Female"
              name="gender"
              type="radio"
            />Female
            <p className="error-message">{formError.gender}</p>
            </div>

            <p>Age</p>
            <input
              value={formInput.age}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="age"
              type="number"
              className="input"
              placeholder="Age"
            />
            <p className="error-message">{formError.age}</p>

            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
        <p> {formInput.username} {formInput.password} {formInput.confirmPassword} {formInput.gender} {formInput.age} </p>
      </div>
  );
}

export default App;