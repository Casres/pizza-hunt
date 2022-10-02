const router = require('express').Router();

// gets ALL and POST at 'api/pizzas' (api route)
router
.route('/')
.get()
.post();

// gets ONE, PUT and DELETE at '/api/pizzas/:id' (api route)
router
.route('/:id')
.get()
.put()
.delete();

module.exports = router; 