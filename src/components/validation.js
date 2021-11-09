const validation = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Podaj email.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email jest niepoprawny";
  }
  if (!values.password) {
    errors.password = "Podaj hasło.";
  } else if (values.password.length < 6) {
    errors.password = "Hasło musi zawierać więcej niż 6 znaków.";
  }
  if (!values.repeatpassword) {
    errors.repeatpassword = "Powtórz hasło.";
  } else if (values.repeatpassword.value === values.password.value) {
    errors.repeatpassword = "Hasła muszą być takie same.";
  }
  return errors;
};
export default validation;
