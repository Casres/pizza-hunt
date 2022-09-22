
const Pizza = require("../models/Pizza");

const pizzaController = {
  // gets all pizzas
  getAllPizzas(req, res) {
    Pizza.find({})
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // gets one pizza
  getPizzaById({ params }, res) {
    Pizza.findOne({ id: params.id })
      .then((dbPizzaData) => {
        // if there is no pizza
        if (!dbPizzaData) {
          res
            .status(404)
            .json({
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
  }
};
module.exports = pizzaController;
