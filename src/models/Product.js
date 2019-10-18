const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema)