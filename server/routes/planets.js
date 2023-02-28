import express from "express";
import {
  createPlanet,
  deletePlanet,
  getPlanet,
  getPlanets,
  updatePlanet,
} from "../controllers/planet.js";

const router = express.Router();

// create
router.post("/", createPlanet);

// update
router.put("/:id", updatePlanet);

// delete
router.delete("/:id", deletePlanet);

// get
router.get("/:id", getPlanet);

// get all
router.get("/", getPlanets);

export default router;
