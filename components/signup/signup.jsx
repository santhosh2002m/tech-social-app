import { useState } from "react";
import "../../styles/custom.scss";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons

export default function SignUp({ isRightPanelActive }) {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const [userProfile, setUserProfile] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    current_password: "",
  });

  const [otp, setOtp] = useState("");

  function userSubmitProfile(e) {
    const { name, value } = e.target;
    setUserProfile((previousEl) => ({ ...previousEl, [name]: value }));
  }

  function onSubmit() {
    if (
      userProfile.username === "" ||
      userProfile.fullname === "" ||
      userProfile.email === "" ||
      userProfile.password === "" ||
      userProfile.current_password === ""
    ) {
      alert("Fill inputs All");
      return;
    }
    setShowOtpForm(true);
    console.log(userProfile);
  }

  return (
    <div
      className={`form-container sign-up ${isRightPanelActive ? "active" : ""}`}
    >
      {!showOtpForm ? (
        <form className="form">
          <h1 className="margin-unset">Sign Up</h1>
          <input
            name="username"
            value={userProfile.username}
            type="text"
            placeholder="Username"
            onChange={userSubmitProfile}
            className="black-bg"
          />
          <input
            name="fullname"
            value={userProfile.fullname}
            type="text"
            placeholder="Full Name"
            onChange={userSubmitProfile}
            className="black-bg"
          />
          <input
            name="email"
            value={userProfile.email}
            type="email"
            placeholder="Email"
            onChange={userSubmitProfile}
            className="black-bg"
          />
          <div className="password-container">
            <input
              name="password"
              value={userProfile.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={userSubmitProfile}
              className="black-bg"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          <div className="password-container">
            <input
              name="current_password"
              value={userProfile.current_password}
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={userSubmitProfile}
              className="black-bg"
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              <p className="custom-style">
                By Signing up, you are acknowledging that you have read,
                understood and accept our{" "}
                <a className="link custom-style-a" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="link custom-style-a" href="#">
                  Privacy policy
                </a>
              </p>
            </label>
          </div>
          <div className="button-group">
            <button type="button" onClick={onSubmit}>
              Request OTP
            </button>
          </div>
        </form>
      ) : (
        <form className="form">
          <h1>Verify OTP</h1>
          <p className="description">Enter the OTP received on your email</p>
          <input
            className="black-bg"
            value={otp}
            type="text"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
          <div className="button-group btn-margin">
            <button type="button" onClick={() => setShowOtpForm(false)}>
              Back
            </button>
            <button type="submit">Verify</button>
          </div>
        </form>
      )}
    </div>
  );
}
