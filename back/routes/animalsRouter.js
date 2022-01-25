const animalsRouter = require("express").Router();

const animals = [
  { id: 1, category: "mammal", name: "dog" },
  { id: 2, category: "mammal", name: "squirrel" },
  { id: 3, category: "mammal", name: "fox" },
  { id: 4, category: "bird", name: "eagle" },
  { id: 5, category: "reptile", name: "crocodile" },
  { id: 6, category: "fish", name: "salmon" },
  { id: 7, category: "amphibian", name: "frog" },
  { id: 8, category: "insects", name: "mosquito" },
];

animalsRouter.get("/", (req, res) => {
  res.send(animals);
});

animalsRouter.get("/name/:name", (req, res) => {
  const name = req.params.name;
  const animal = animals.find((animal) => animal.name === name);
  res.send(animal);
});

animalsRouter.get("/categories/:category", (req, res) => {
  const category = req.params.category;
  const animal = animals.filter((animal) => animal.category === category);
  res.send(animal);
});

animalsRouter.post("/", (req, res) => {
  // animals.length => length will equal 8
  // animals.length - 1 => length will equal 7
  // id: animals[animals.length - 1].id + 1, => id will equal 8
  const animal = {
    id: animals[animals.length - 1].id + 1,
    category: req.body.category,
    name: req.body.name,
  };
  animals.push(animal);
  res.send(animal);
});

animalsRouter.put("/name/:name", (req, res) => {
  const name = req.params.name;
  const animal = animals.find((animal) => animal.name === name);
  animal.category = req.body.category;
  animal.name = req.body.name;
  res.send(animal);
});

animalsRouter.delete("/name/:name", (req, res) => {
  const name = req.params.name;
  const animal = animals.find((animal) => animal.name === name);
  const animalIndex = animals.indexOf(animal);
  animals.splice(animalIndex, 1);
  res.send(`${animal.name} has been deleted`);
});

module.exports = animalsRouter;
