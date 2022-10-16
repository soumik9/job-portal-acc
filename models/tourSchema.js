const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name filed is required'] 
    },
    category: { 
        type: String, 
        required: [true, 'Category filed is required'], 
        enum: {
            values: ['silver', 'delux', 'gold'],
            message: "category value can not be {VALUE}, must be silver/delux/gold"
        }
    },
    viewers: { 
        type: Number, 
        default: 0 
    },
    price: { 
        type: Number, 
        required: [true, 'Price filed is required'],
        min: [0, 'Price can not be negative']
    },
}, { timestamps: true });

const Tour = new mongoose.model("Tour", tourSchema);
module.exports = Tour