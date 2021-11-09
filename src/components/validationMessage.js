const validationMessage = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Podaj imię!";
  } else if (values.name.length < 3) {
    errors.name = "Podane imię jest niepoprawne!";
  }
  if (!values.email) {
    errors.email = "Podaj adres email!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email jest niepoprawny!";
  }
  if (!values.message) {
    errors.message = "Wpisz wiadomość!";
  } else if (values.message.length < 120) {
    errors.message = "Wiadomość musi mieć conajmniej 120 znaków!";
  }
  if (errors) {
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return errors;
};

export default validationMessage;
