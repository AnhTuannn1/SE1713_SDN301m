import mongoose, {Schema} from 'mongoose';
// Product schema
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'product name is required'], 
        unique: [true, 'product name is unique'],
    },
    price: {
        type : Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Product = mongoose.model("products", productSchema);
export default Product;