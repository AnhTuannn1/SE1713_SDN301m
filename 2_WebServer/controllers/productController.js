import { productDAO } from "../dao/index.js";


const getAllProducts = async (req, res) => {
    try {
        res.status(200).json(await productDAO.getAllProducts());
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        });
    }
}


const getTutorialById = async (req, res) => {
    try {
        res.status(200).json(await productDAO.getTutorialById(req.params.id));
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        });
    }
  };
  

const createTutorial = async (req,res)=>{
    const id = req.params.id
    try{
        // Get data Object from Body of Request
        const {
            name, 
            price,
            description,
            category
        } = req.body
        const result = await productDAO.create({name, price, description, category});
        res.status(201).json(result);

    }catch(err){
        res.status(500).json({
            error:err.toString()
        })
    }
}

export default {getAllProducts, createTutorial, getTutorialById}


