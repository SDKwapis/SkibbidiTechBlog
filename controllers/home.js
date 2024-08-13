const router = require("express").Router();
// this is just here as a test
router.get("/", async (req, res) => {
    res.render('home');
  });
  
  module.exports = router;