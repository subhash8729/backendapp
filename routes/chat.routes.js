import express from "express";
import { submitChat } from "../controllers/chat.controllers.js";

const router = express.Router();

router.post("/chat",submitChat);

export default router;