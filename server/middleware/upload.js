const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
require('dotenv').config()

const storage = new GridFsStorage({
    url: `mongodb+srv://nilima-user_22:AyWAPww0YLm7DcwK@cluster0.djrzgav.mongodb.net/tech-blog?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        if(match.indexOf(file.memeType) === -1)
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
    
});

module.exports = multer({ storage: storage });