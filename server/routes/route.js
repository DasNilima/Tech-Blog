import express from 'express';
// import { getAllPosts } from "../controllers/post-controller.js";
import {  signup, login } from "../controllers/user-controller.js";


const router = express.Router();



router.post('/signup', signup);
router.post('/login', login );


export default router;