import { memo, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";

import { validationRules } from "./utils";

const formFields = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
  },
];
const defaultUserDetails = formFields.reduce(
  (acc, cur) => ({ ...acc, [cur.name]: "" }),
  {}
);
const defaultErrorMessage = formFields.reduce(
  (acc, cur) => ({ ...acc, [cur.name]: "" }),
  {}
);

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
      return setErrorMsg(copyErrorMessage);
    }
    addUser({ ...userDetails, id: uuid() });
    setUserDetails(defaultUserDetails);
    setErrorMsg(defaultErrorMessage);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {formFields.map(({ name, type, label }) => (
        <Form.Group className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            value={userDetails[name]}
            onChange={handleChange}
            type={type}
            name={name}
            placeholder={`Enter ${label}`}
            isInvalid={!!errorMsg[name]}
          />
          <Form.Control.Feedback type="invalid">
            {errorMsg[name]}
          </Form.Control.Feedback>
        </Form.Group>
      ))}
      <Button variant="primary" type="submit">
        Add User
      </Button>
    </Form>
  );
};

export default memo(AddUserForm);
