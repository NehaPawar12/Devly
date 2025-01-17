import express from 'express'
import { getUserProfileAndRepos, likeProfile } from '../controllers/user.controller.js';
import ensureAuthenticated from '../middleware/ensureAuthenticated.js'

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos)

//Like profile
router.post("/like/:username", ensureAuthenticated, likeProfile)

export default router;