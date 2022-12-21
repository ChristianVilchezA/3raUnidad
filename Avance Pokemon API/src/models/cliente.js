const mongoose = require("mongoose")


const clienteSchema = mongoose.Schema({
    nomb_Cliente: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    ciudad:{
        type: String,
        required:true
    },
    calle:{
        type: String,
        required:true
    },
    numero:{
        type: Number,
        required:true
    },
    estado:{
        type: String,
        required:true
    },
    fecha_nacimiento:{
        type: String,
        required:true
    },
});

module.exports = mongoose.model('Cliente', clienteSchema); 