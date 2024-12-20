import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { uplode } from "../middlewares/multer.middlewares.js";

const router = Router()
// router.route('/').post(registerUser)
router.route('/registor').post(
    uplode.fields([
        {
            name: 'avatar',
            maxCount: 1,

        },
        {
            name: "converimage",
            maxCount: 1
        }
    ]),
    registerUser
)
export default router