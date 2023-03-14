import ellipse from "../../assets/Ellipse.png";
import logo from "../../assets/logo.png";
import google from "../../assets/google.png";

import "./login-page.css";

import { DotMatrix } from "../../Components/dot-matrix/dot-matrix";

export const LoginPage = () => {
  return (
    <div className="login-container">
      <img src={ellipse} alt="Stylistic Element" />
      <section className="login-inner-container">
        <span className="matrix-top">
          <DotMatrix />
        </span>
        <button id="login-btn">
          <img src={google} alt="Google Logo" id="google-logo" />
          Sign up or Sign In with Google
        </button>
        <span className="matrix-bottom">
          <DotMatrix />
        </span>
      </section>
      <section className="login-section">
        <img src={logo} alt="Logo" id="login-logo" />
        <h1 id="logo-name">Emproto</h1>
      </section>
    </div>
  );
};
