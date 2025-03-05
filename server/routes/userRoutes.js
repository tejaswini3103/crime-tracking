import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({ message: "User registered successfully" });
});

export default router;
