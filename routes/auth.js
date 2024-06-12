import { Router } from "express";
import singInUser from "./controllers";
const router = Router();

const validate = (formdata) => {
  email = formdata.email;
  password = formdata.password;
};

router.get("/", (req, res) => {
  res.render("pages/signin");
});

router.post("/signIn", (req, res) => {
  const formdata = req.body;
  res.send(formdata);
  console.log(formdata);

  try {
    validate(formdata);
  } catch {}

  signInUser(formdata);
});

router.post("/signOut", (req, res) => {});

export default router;
