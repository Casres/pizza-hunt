const router = require('express').Router();
const {
    getAllPizzas,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

// gets ALL and POST at 'api/pizzas' (api route)
router
.route('/')
.get(getAllPizzas)
.post(createPizza);

// gets ONE, PUT and DELETE at '/api/pizzas/:id' (api route)
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router; 