import multer from "multer";

const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Public/Temp")
    },
    filename: function (req, file, cb) {
        const uniqeSuffix = Data.now() + '_' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

export const uplode = multer({ storage: Storage })