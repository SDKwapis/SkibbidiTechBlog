const router = require("express").Router();
// this is just here as a test
router.get("/", async (req, res) => {
  res.render('home', {
    title: 'Home',
    blogTitle: 'My Modern Blog',
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.',
    posts: [
        {
            id: 1,
            title: 'My First Blog Post',
            date: 'August 15, 2024',
            author: 'Author Name',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...',
            image: 'https://via.placeholder.com/800x400'
        },
        {
            id: 2,
            title: 'Another Blog Post',
            date: 'August 14, 2024',
            author: 'Author Name',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...',
            image: 'https://via.placeholder.com/800x400'
        }
    ],
    categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4']
});
  });
  
  module.exports = router;