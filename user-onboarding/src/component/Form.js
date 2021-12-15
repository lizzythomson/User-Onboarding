import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <form className="form-container" onSubmit={onSubmit}>
        <div className="form-group">
          <h2>Create a New User</h2>
          <div className="inputs-container">
            <label>
              Name
              <input
                name="name"
                type="text"
                value={values.name}
                onChange={onChange}
              />
            </label>
            <label>
              Username
              <input
                name="username"
                type="text"
                value={values.username}
                onChange={onChange}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                value={values.password}
                onChange={onChange}
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
          <div className="error">
            <div>{errors.name}</div>
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>
          </div>
          <button disabled={disabled}>Submit</button>
        </div>
      </form>
    </div>
  );
}
