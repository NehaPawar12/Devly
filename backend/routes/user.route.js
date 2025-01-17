import express from 'express'
import { getLikes, getUserProfileAndRepos, likeProfile } from '../controllers/user.controller.js';
import {ensureAuthenticated} from '../middleware/ensureAuthenticated.js'


const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos)

//fetch the liked data
router.get("/likes", ensureAuthenticated , getLikes)

//Like profile
router.post("/like/:username", ensureAuthenticated , likeProfile)

export default router;