import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import schema from "./validation/formSchema";
import axios from "axios";
import * as yup from "yup";
import User from "./component/User";

const initialFormValues = {
  username: "",
  name: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  name: "",
  email: "",
  password: "",
  tos: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://fakeapi.com")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((resp) => {
        setUsers([resp.data, ...users]);
      })
      .catch((error) => console.error(error))
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) =>
        setFormErrors({ ...formErrors, [name]: error.errors[0] })
      );
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      name: formValues.name,
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <h1>Users</h1>
      </header>
      <hr></hr>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <div className="userlist-container">
        <h2>User List</h2>
        {users.map((user) => {
          return <User key={user.id} details={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
