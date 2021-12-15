import "./App.css";
import React, { useState } from "react";
// import Form from "../component/Form";
// import schema from '../validation/formSchema';
// import axios from "axios";
// import * as yup from "yup";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  termsOfService: false,
};

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <header>
        <h1>Users</h1>
      </header>
      <div>
        <form className="form-container">
          <div className="form-group">
            <h2>Create a New User</h2>
            <button>Submit</button>
            <div className="inputs-container">
              <label>
                Username
                <input
                  name="username"
                  type="text"
                  // value={values.username}
                  // onChange={onChange}
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  // value={values.email}
                  // onChange={onChange}
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  // value={values.password}
                  // onChange={onChange}
                />
              </label>
              <label>
                Terms Of Service
                <input
                  name="tos"
                  type="checkbox"
                  checked={values.tos}
                  onChange={onChange}
                />
              </label>
            </div>
          </div>
        </form>
      </div>
      <h2>User List</h2>
    </div>
  );
}

export default App;
