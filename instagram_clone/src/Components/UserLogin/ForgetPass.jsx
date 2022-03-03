import React from "react";
import Styles from "./loginSignUp.module.css";

function ForgetPass() {
  return (
    <div>
        <nav className={Styles.forgetpNavbar}>
          <img
            height={"52px"}
            src="https://i.ibb.co/gms294Q/Screenshot-638-removebg-preview.png"
            alt=""
          />
        </nav>

        <div className={Styles.mainDivForgetPass}>
          <div className={Styles.forgetPassdiv}>
             <img src="https://i.ibb.co/YdPfybg/Untitled-design-6.png" height={"105px"} alt="lockimg" />
             <h3>Trouble Logging In?</h3>
             <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
             <input type="text" placeholder="Email, Phone, or Username"/>
             {/* <button>Send Login Link</button> */}
          </div>
        </div>

    </div>
  );
}

export default ForgetPass;
