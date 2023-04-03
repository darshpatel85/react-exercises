const NAME_REGEX = /^[a-zA-Z ]+$/;
const EMAIL_REGEX = /^[a-zA-Z]([\w!#$%&'*+\-\/=?^`{|}~]+\.?)+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]+$/;
const URL_REGEX = /^((http(s)?):\/\/(www)?([a-zA-Z\-0-9]+\.?)+([a-zA-Z0-9]+)(:\d+)?)/;

// object for validation rules
// key will be the name of field
// create validate function for checking validation
// Return :
// validate : true if all correct false otherwise
// message : if false return message, undefined otherwise

export const validationRules = {
  loginId: {
    validate: (input) => {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Login Id can't be empty" };
      }
      return { validate: true };
    }
  },
  email: {
    validate: (input) => {
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
  },
  name: {
    validate: (input) => {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Name can't be empty" };
      }
      if (!NAME_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid name"
        };
      }
      return { validate: true };
    }
  },
  timeZone: {
    validate: (input) => {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Select TimeZone" };
      }
      return { validate: true };
    }
  },
  homePageURL: {
    validate: (input) => {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "URL can't be empty" };
      }
      if (!URL_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid HomePage URL"
        };
      }
      return { validate: true };
    }
  },
  aboutMe: {
    validate: (input) => {
      const inputValue = input.trim();
      if (inputValue.length < 50) {
        return {
          validate: false,
          message: "Please write atleast 50 character in About Me"
        };
      }
      return { validate: true };
    }
  },
  receiveNotification: {
    validate: (input) => {
      if (!input) {
        return {
          validate: false,
          message: "Please accept receive notification."
        };
      }
      return { validate: true };
    }
  }
};
