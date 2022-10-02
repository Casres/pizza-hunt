const Pizza = require("../models/Pizza");

const pizzaController = {

  getAllPizzas(req, res) {
    Pizza.find({})
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getPizzaById({ params }, res) {
    Pizza.findOne({ id: params.id })
      .then((dbPizzaData) => {
        // if there is no pizza
        if (!dbPizzaData) {
          res.status(404).json({
            message: "No pizza was found with this ID, please try again.",
          });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  createPizza({ body }, res) {
    Pizza.create(body)
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => res.status(400).json(err));
  },

  updatePizza({ params }, res) {
    Pizza.FineOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res
            .status(404)
            .json({
              message: "No pizza was found with tis ID, please try again.",
            });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((err) => res.status(400).json(err));
  }
  
};
module.exports = pizzaController;
