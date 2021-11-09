const validationMessage = ({ name, email, message }) => {
  let errors = {};

  if (!name) {
    errors.name = "Podaj imię!";
  } else if (name.length < 3) {
    errors.name = "Podane imię jest niepoprawne!";
  }
  if (!email) {
    errors.email = "Podaj adres email!";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    email = "Email jest niepoprawny!";
  }
  if (!message) {
    errors.message = "Wpisz wiadomość!";
  } else if (message.length < 120) {
    errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
  }

  return errors;
};

export default validationMessage;
