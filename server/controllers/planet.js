import Planet from "../models/Planet.js";

export const createPlanet = async (req, res, next) => {
  const newPlanet = new Planet(req.body);

  try {
    const savedPlanet = await newPlanet.save();
    res.status(200).json(savedPlanet);
  } catch (err) {
    next(err);
  }
};

export const updatePlanet = async (req, res, next) => {
  try {
    const updatedPlanet = await Planet.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      new: true,
    });
    res.status(200).json(updatedPlanet);
  } catch (err) {
    next(err);
  }
};

export const deletePlanet = async (req, res, next) => {
  try {
    await Planet.findByIdAndDelete(req.params.id);
    res.status(200).json("Planet has been deleted!");
  } catch (err) {
    next(err);
  }
};

export const getPlanet = async (req, res, next) => {
  try {
    const planet = await Planet.findById(req.params.id);
    res.status(200).json(planet);
  } catch (err) {
    next(err);
  }
};

export const getPlanets = async (req, res, next) => {
  try {
    const planets = await Planet.find();
    res.status(200).json(planets);
  } catch (err) {
    next(err);
  }
};
