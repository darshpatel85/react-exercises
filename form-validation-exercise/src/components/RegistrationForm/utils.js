const NAME_REGEX = /^[a-zA-Z ]+$/;
const EMAIL_REGEX =
  /^[a-zA-Z]([\w!#$%&'*+\-\/=?^`{|}~]+\.?)+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]+$/;
const URL_REGEX =
  /^((http(s)?):\/\/(www)?([a-zA-Z\-0-9]+\.?)+([a-zA-Z0-9]+)(:\d+)?)/;

// key will be the name of field
// create validate function for checking validation
// Return :
// validate : true if all correct false otherwise
// message : if false return message, undefined otherwise

export const validationRules = (key, input) => {
  switch (key) {
    case "loginId": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Login Id can't be empty" };
      }
      return { validate: true };
    }
    case "email": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Email can't be empty" };
      }
      if (!EMAIL_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid email address",
        };
      }
      return { validate: true };
    }
    case "name": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Name can't be empty" };
      }
      if (!NAME_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid name",
        };
      }
      return { validate: true };
    }
    case "timeZone": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "Select TimeZone" };
      }
      return { validate: true };
    }
    case "homePageURL": {
      const inputValue = input.trim();
      if (!inputValue) {
        return { validate: false, message: "URL can't be empty" };
      }
      if (!URL_REGEX.test(inputValue)) {
        return {
          validate: false,
          message: "Please enter valid HomePage URL",
        };
      }
      return { validate: true };
    }

    case "aboutMe": {
      const inputValue = input.trim();
      if (inputValue.length < 50) {
        return {
          validate: false,
          message: "Please write atleast 50 character in About Me",
        };
      }
      return { validate: true };
    }
    case "receiveNotification": {
      if (!input) {
        return {
          validate: false,
          message: "Please accept receive notification.",
        };
      }
      return { validate: true };
    }
    default: {
      return { validate: true };
    }
  }
};
