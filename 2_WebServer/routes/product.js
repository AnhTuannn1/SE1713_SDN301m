import express from "express";
import {productController} from "../controllers/index.js";

const productsRouter = express.Router();

productsRouter.get('/', productController.getAllProducts);
productsRouter.get('/:id', productController.getTutorialById);
// Post : Create new 
productsRouter.post('/',productController.createTutorial)


export default productsRouter 