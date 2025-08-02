import express from "express"
import { login, signup } from "../controllers/auth.controllers.js"
import { findUser, sendData } from "../controllers/data.controllers.js"


const router = express.Router()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

router.post('/login',login)
router.post('/signup',signup)
router.get("/getdata",sendData);
router.post("/finduser",findUser);
export default router
