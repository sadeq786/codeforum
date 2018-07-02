// backend api calls to database
const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// require controllers here. 

// get and post route for "/api/posts"
router.route("/")
    // fetch data
    .get(postsController.findAll)
    // make new post
    .post(postsController.create);

// Get posts with individual ID using  "/api/posts/:id"
router
    .route("/:id")
    .get(postsController.findById)
    // .put(postsController.update) . currently, no editing abilities. 
    .delete(postsController.remove);


module.exports = router;