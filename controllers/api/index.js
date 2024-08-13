const router = require("express").Router();




// this is just here as a test
router.get("/", async (req, res) => {
    res.send(`You're on api/index file`);
    console.log("a thing");
  });
  
  module.exports = router;