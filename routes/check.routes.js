import express from "express"
import { authToken } from "../controllers/check.controllers.js"

const router = express.Router()
 router.post("/auth",authToken)

 export default router