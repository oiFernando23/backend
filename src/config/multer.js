const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk')
const path = require('path');
const crypto = require('crypto');

// const storageS3 = new aws.S3({
//     secretAccessKey: 'PhyBCh1jLiHy+Se47uBVZe8/YYkale0Naw5Bm2jp',
//     accessKeyId: 'AKIA4R66WC6XOIZC374M',
// })

const storageTypes = {
    local: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads' ),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err)
                file.key = `${hash.toString('hex')}-${file.originalname}`
                cb(null, file.key)
            })
        }}),
    s3: multerS3({
        s3: new aws.S3({
            secretAccessKey: '5yhIXbjUv6Uots4uriHT7PIXoOb6WL+kmZGJ8LSa',
            accessKeyId: 'AKIA6EV7VTM66JHW4XWM',
        }),
        bucket: 'mybodymyart2',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err)
                const filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null, filename)
            })
        }
    })
}

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads' ),
    storage: storageTypes['s3'],
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
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