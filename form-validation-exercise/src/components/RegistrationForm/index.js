import React, { useState } from "react";

import "./form-styles.css";

import { validationRules } from "./utils";

const defaultFormData = {
  loginId: "",
  email: "",
  name: "",
  timeZone: "",
  homePageURL: "",
  aboutMe: "",
  receiveNotification: false,
};

const defaultErrorMsg = {
  loginId: "",
  email: "",
  name: "",
  timeZone: "",
  homePageURL: "",
  aboutMe: "",
  receiveNotification: "",
};
const RegistrationForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [errorMsg, setErrorMsg] = useState(defaultErrorMsg);

  const handleInputChange = (event) => {
    let value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    setFormData({ ...formData, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const copyErrorMessage = { ...defaultErrorMsg };
    let isValid = true;
    Object.entries(formData).forEach(([key, value]) => {
      const { validate, message } = validationRules(key, value);
      if (!validate) {
        isValid = false;
        copyErrorMessage[key] = message;
      }
    });
    if (!isValid) {
      setErrorMsg(copyErrorMessage);
    } else {
      alert("Form submitted!");
      setFormData(defaultFormData);
      setErrorMsg(defaultErrorMsg);
    }
  };

  return (
    <div className="center">
      <div className="form-container">
        <form id="registrationForm" onSubmit={handleSubmit} name="registration">
          <div className="form-title">Registration Form</div>
          <table>
            <tbody>
              <tr>
                <th>Login Id</th>
                <td>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={formData.loginId}
                    name="loginId"
                  />
                  <span className="err">{errorMsg.loginId}</span>
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <input
                    type="email"
                    onChange={handleInputChange}
                    name="email"
                    value={formData.email}
                  />
                  <span className="err">{errorMsg.email}</span>
                </td>
              </tr>
              <tr>
                <th>Name</th>
                <td>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name="name"
                    value={formData.name}
                  />
                  <span className="err">{errorMsg.name}</span>
                </td>
              </tr>
              <tr>
                <th>TimeZone</th>
                <td>
                  <select
                    onChange={handleInputChange}
                    name="timeZone"
                    value={formData.timeZone}
                  >
                    <option disabled value="">
                      TimeZone
                    </option>
                    <option>GMT</option>
                    <option>EAT</option>
                    <option>IST</option>
                  </select>
                  <span className="err">{errorMsg.timeZone}</span>
                </td>
              </tr>
              <tr>
                <th>Home Page</th>
                <td>
                  <input
                    onChange={handleInputChange}
                    type="url"
                    name="homePageURL"
                    value={formData.homePageURL}
                  />
                  <span className="err">{errorMsg.homePageURL}</span>
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  About me
                  <br />
                  <textarea
                    onChange={handleInputChange}
                    rows="6"
                    cols="50"
                    name="aboutMe"
                    value={formData.aboutMe}
                  ></textarea>
                  <span className="err">{errorMsg.aboutMe}</span>
                </th>
              </tr>
              <tr>
                <td colSpan="2">
                  <input
                    onChange={handleInputChange}
                    id="receiveNotification"
                    type="checkbox"
                    name="receiveNotification"
                    checked={formData.receiveNotification}
                  />
                  <label htmlFor="receiveNotification">
                    <b>Receive Notification of Comments.</b>
                  </label>
                  <span className="err">{errorMsg.receiveNotification}</span>
                  <br />
                  <sub>
                    You will be sent an email when someone posts comment to your
                    Blog or Album.
                  </sub>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p className="center">Your Password will be mailed to you.</p>
            <div className="center">
              <button type="submit">GO</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
