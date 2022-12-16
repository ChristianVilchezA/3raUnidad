const express  = require("express")
const clienteSchema = require("../models/cliente")

const router = express.Router();


router.post("/clientes", (req, res) => {
   const cliente = clienteSchema(req.body);
   cliente
   .save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

module.exports = router


