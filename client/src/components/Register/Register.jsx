import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { Fragment, useState } from "react";

import log from "../../assets/log.jpg";
import logPhoto from "../../assets/bow.jpg";

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
    <Fragment>
      <div className="border-img">
        <img src={log} alt="Background" />
      </div>
      <section id="register">
        <div className="form-register">
          <h2>Register</h2>
          <div className="login-img">
            <img src={logPhoto} alt="Login Image" />
          </div>
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
            {error && (
              <p className="field">
                <span style={{ fontSize: "18px", color: "red" }}>{error}</span>
              </p>
            )}
            <button type="submit">register</button>
            <p className="message">
              Already registered? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Register;
