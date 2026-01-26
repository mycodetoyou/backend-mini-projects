import express from 'express';

import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Protected route to get user profile
router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({ user: req.user, message: "User profile fetched successfully" });
});

export default router;