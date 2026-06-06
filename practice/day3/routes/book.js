const express = require('express');
const router = express.Router();
const {getBooks,addBooks,deleteBooks} = require('../controllers/bookControllers');

router.get("/",getBooks)
router.post("/",addBooks)
router.delete("/:id",deleteBooks)

module.exports = router;