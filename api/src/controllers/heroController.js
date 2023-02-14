import mongoose from "mongoose";
import { HeroSchema } from "../models/heroModel";

const Hero = mongoose.model("Hero", HeroSchema);

export const addNewHero = (req, res) => {
  let newHero = new Hero(req.body);
  Hero.findOne({}, (err, hero) => {
    newHero.heroid = hero ? hero.heroid + 1 : 1;
    newHero.save((err, hero) => {
      if (err) {
        res.send(err);
      }
      res.json(hero);
    });
  }).sort({ heroid: -1 });
};

export const getHeroes = (req, res) => {
  Hero.find({}, (err, hero) => {
    if (err) {
      res.send(err);
    }
    res.json(hero);
  });
};

export const getHeroWithID = (req, res) => {
  Hero.findOne({ heroid: req.params.heroid }, (err, hero) => {
    if (err) {
      res.send(err);
    }
    res.json(hero);
  });
};

export const updateHero = (req, res) => {
  Hero.findOneAndUpdate(
    { heroid: req.params.heroid },
    req.body,
    { new: true },
    (err, hero) => {
      if (err) {
        res.send(err);
      }
      res.json(hero);
    }
  );
};

export const deleteHero = (req, res) => {
  Hero.remove({ heroid: req.params.heroid }, (err, hero) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted hero" });
  });
};

export const searchHeroes = (req, res) => {
  Hero.find(
    { name: { $regex: req.params.searchTerm, $options: "i" } },
    (err, hero) => {
      if (err) {
        res.send(err);
      }
      res.json(hero);
    }
  );
};
