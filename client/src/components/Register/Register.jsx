import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

import "./Register.css";

const intionalValues = {
  email: "",
  password: "",
  rePassword: "",
};

const Register = () => {
  const [error, setError] = useState("");
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async ({ email, password, rePassword }) => {
    if (!email.includes("@") || !email.includes(".")) {
      setError('Invalid email format. Email must contain "@" and "."');
      return;
    }

    if (!password.trim()) {
      setError("Password field is required.");
      return;
    }

    if (password !== rePassword) {
      setError(
        "Passwords do not match. Please ensure both password fields are identical"
      );
      return;
    }

    try {
      await register(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    intionalValues,
    registerHandler
  );

  return (
    <div className="wrap-container">
      <section className="register">
        <div className="register-card">
          <div className="left-side-register">
            <h2>Register</h2>
          </div>
          <div className="right-side-register">
            <form onSubmit={submitHandler} className="register-form">
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={changeHandler}
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={changeHandler}
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="rePassword"
                id="repeat-password"
                value={values.rePassword}
                onChange={changeHandler}
                placeholder="repeat password"
              />
              {error && <p className="error-message">{error}</p>}
              <button className="button-register" type="submit">
                Register
              </button>
              <p className="message-register">
                Already registered? <Link to={"/login"}>Login</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
