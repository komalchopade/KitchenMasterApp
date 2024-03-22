// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     amount: {
//         type: Number,
//         required: true,
//         unique: true
//     },
//     quantity: {
//         type: Number,
//         required: true
//     }
// });

// module.exports = mongoose.model('Product', ProductSchema);

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

ProductSchema.statics.findByCategory = async function (category) {
    const products = await this.find({ category: category });
    return products;
};

module.exports = mongoose.model('Product', ProductSchema);
