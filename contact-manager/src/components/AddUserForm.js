import { memo, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";

import { validationRules } from "./utils";

const defaultUserDetails = {
  firstName: "",
  lastName: "",
  email: ""
};
const defaultErrorMessage = {
  firstName: "",
  lastName: "",
  email: ""
};

const AddUserForm = ({ addUser }) => {
  const [userDetails, setUserDetails] = useState(defaultUserDetails);
  const [errorMsg, setErrorMsg] = useState(defaultErrorMessage);

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const copyErrorMessage = { ...errorMsg };
    let isValid = true;
    Object.entries(userDetails).forEach(([key, value]) => {
      const { validate, message } = validationRules(key, value);
      if (!validate) {
        isValid = false;
        copyErrorMessage[key] = message;
      }
    });
    if (!isValid) {
      setErrorMsg(copyErrorMessage);
    } else {
      addUser({ ...userDetails, id: uuid() });
      setUserDetails(defaultUserDetails);
      setErrorMsg(defaultErrorMessage);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={userDetails.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter email"
          isInvalid={!!errorMsg.email}
        />
        <Form.Control.Feedback type="invalid">
          {errorMsg.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>FirstName</Form.Label>
        <Form.Control
          value={userDetails.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="FirstName"
          isInvalid={!!errorMsg.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {errorMsg.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName</Form.Label>
        <Form.Control
          value={userDetails.lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="LastName"
          isInvalid={!!errorMsg.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {errorMsg.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
};

export default memo(AddUserForm);
