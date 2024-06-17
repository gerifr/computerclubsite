const express = require("express");
const FirebaseAuth = require("../controller/fireAuth");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/signin");
});

router.post("/signIn", (req, res) => FirebaseAuth.signIn(req, res));
router.post("/signOut", (req, res) => FirebaseAuth.signUp(req, res));
router.post("/resetPass", (req, res) => FirebaseAuth.resetPass(req, res));

module.exports = router;
