import express from 'express'

const router = express.Router();

router.get("/github");
router.get("/github/callback")

export default router;