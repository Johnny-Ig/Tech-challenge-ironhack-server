const router = require("express").Router();

const Phones = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json(Phones);
});

router.get("/:phonesId", (req, res, next) => {
  const phoneId = req.params.phonesId;

  const response = Phones.find((eachPhone) => eachPhone.id == phoneId);

  res.json(response);
});

module.exports = router;
