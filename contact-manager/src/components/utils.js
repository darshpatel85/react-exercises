const NAME_REGEX = /^[a-zA-Z ]+$/;
const EMAIL_REGEX = /^[a-zA-Z]([\w!#$%&'*+\-\/=?^`{|}~]+\.?)+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]+$/;

// key will be the name of field
// create validate function for checking validation
// Return :
// validate : true if all correct false otherwise
// message : if false return message, undefined otherwise

export const validationRules = (key, input) => {
  switch (key) {
    case "email": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Email can't be empty" };
      }
      if (!EMAIL_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid email address"
        };
      }
      return { validate: true };
    }
    case "firstName": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "FirstName can't be empty" };
      }
      if (!NAME_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid FirstName"
        };
      }
      return { validate: true };
    }
    case "lastName": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "LastName can't be empty" };
      }
      if (!NAME_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid LastName"
        };
      }
      return { validate: true };
    }
    default:
      return { validate: true };
  }
};
