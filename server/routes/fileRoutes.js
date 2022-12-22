const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

const {
    uploadImage,
    getImage
} = require('../controllers/imageController')

router.post('/file/upload', upload.single('file'), uploadImage);

router.get('/file/:filename', getImage);

module.exports = router;