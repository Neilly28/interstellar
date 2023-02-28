import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from auth endpoitn");
});

router.get("/register", (req, res) => {
  res.send("hello this is register ednpoint!");
});

export default router;
