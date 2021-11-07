const validationMessage = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Podaj imię!";
  } else if (values.name.length < 3) {
    errors.name = "Podane imię jest niepoprawne!";
  }
  if (!values.email) {
    errors.email = "Email is requires.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email jest niepoprawny!";
  }
  if (!values.message) {
    errors.message = "Wpisz wiadomość!";
  } else if (values.message.length < 120) {
    errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
  }
  return errors;
};
export default validationMessage;