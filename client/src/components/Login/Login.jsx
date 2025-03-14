import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";

import "./Login.css";

import log from "../../assets/rose-gold.jpg";
import logPhoto from "../../assets/ball.jpg";

const initialValues = { email: "", password: "" };

const Login = () => {
  const [error, setError] = useState("");
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      if (!email.trim()) {
        setError("Email field is required.");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        setError('Invalid email format. Email must contain "@" and "."');
        return;
      }

      if (!password.trim()) {
        setError("Password field is required.");
        return;
      }

      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <Fragment>
      <div className="border-img">
        <img src={log} alt="Background" />
      </div>
      <section className="login">
        <div className="form">
          <h2>Login</h2>

          <div className="login-img">
            <img src={logPhoto} alt="Login Image" />
          </div>

          <form className="login-form" onSubmit={submitHandler}>
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="email"
            />

            <input
              type="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
              id="password"
              placeholder="password"
            />

            {error && (
              <p className="field">
                <span className="error-message">{error}</span>
              </p>
            )}

            <button className="button-login" type="submit">
              Login
            </button>

            <p className="message">
              Not registered? <Link to={"/register"}>Create an account</Link>
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
