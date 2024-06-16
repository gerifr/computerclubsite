const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("../firebase/initFirebase");

const auth = getAuth;

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // everything that happens if singin is succeful
    console.log(userCredential);
    res.redirect("/");
  } catch (error) {
    //if singin failed
    console.log(error);
  }
};

const singUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPass } = req.body;
  if (password !== confirmPass) {
    //error if passwords dont match
    console.log("Password didnt match");
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // everything that happens if singup is succeful
    console.log(userCredential);
  } catch (error) {
    // if singup failed
    console.log(error);
  }
};

module.exports = { signIn, singUp };
