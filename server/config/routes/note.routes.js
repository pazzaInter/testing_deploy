const router = require('express').Router();
const noteController = require('../../controllers/notes.js')

module.exports = router
    .get('/', noteController.index)
    .post('/', noteController.create);
