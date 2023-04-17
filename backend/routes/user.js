const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("HELLO");
});

router.post("/testpost", (req, res) => {
  const username = req.body.username;
  res.send("your username is:"+ username)
});

module.exports = router;
