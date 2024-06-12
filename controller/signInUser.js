import { signIn } from "./firebase/fireSignIN";

const authUser = (formData) => {
  const email = formData.email;
  const password = formData.password;

  signIn(email, password);
};
