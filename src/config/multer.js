const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads' ),
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads' ),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err)
                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            })
        }
    }),
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image-jpeg',
            'image/pjpeg',
            'image/png',
            'image/jpg',
            'image/gif'
        ]

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else{
            cb(new Error('Invalid mimetype'))
        }
    }
}