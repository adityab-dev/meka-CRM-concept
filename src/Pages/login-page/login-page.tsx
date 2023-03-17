import ellipse from "../../assets/Ellipse.png";
import logo from "../../assets/logo.png";

import "./login-page.css";

import { DotMatrix } from "../../Components/dot-matrix/dot-matrix";
import { LoginButton } from "../../Components/buttons/login-button";

export const LoginPage = () => {
  return (
    <div className="login-container">
      <img src={ellipse} alt="Stylistic Element" />
      <section className="login-inner-container">
        <span className="matrix-top">
          <DotMatrix />
        </span>
        <LoginButton />
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
