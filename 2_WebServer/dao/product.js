import Product from "../models/product.js";
// C: Create a new product
const create = async ({name, price, description, category}) => {
    try {
        const existProduct = await Product.findOne({name}).exec();
        if (existProduct != null) 
            throw new Error('This product name already exist');
        const newProduct = await Product.create({name, price, description, category});
        // ._doc la 1 promise
        return newProduct._doc; 
        } catch (error) {
        throw new Error(error.toString());
    }
}
// R: Read all products 
const getAllProducts = async () =>{
    try {
        return await Product.find({}).exec();
    } catch (error) {
        throw new Error(error.toString());
    }
}


const getTutorialById = async (id) => {
    try {
       return await  Product.findOne({_id : id}).exec(); 
    } catch (error) {
        throw new Error(error.toString());
    }

  };


// U: Update product

// D: Delete products
export default {
    create,
    getAllProducts,
    getTutorialById
}