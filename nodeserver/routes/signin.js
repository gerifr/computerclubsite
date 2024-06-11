const express = require("express");
const authUser = require("./firebase/authUser");
const router = express.Router();

const validate = (formdata) => {
  email = formdata.email;
  password = formdata.password;
};

router.get("/", (req, res) => {
  res.render("pages/signin");
});

router.post("/", (req, res) => {
  const formdata = req.body;
  res.send(formdata);
  console.log(formdata);

  try {
    validate(formdata);
  } catch {}

  authUser(formdata);
});

module.exports = router;
