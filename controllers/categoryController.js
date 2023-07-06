const Category = require("../model/category.model");

const categoryHandler = async (req, res) => {
    try{
        const categories = await Category.find();
        res.json(categories)
    }
    catch{
        res.status(404).json({message :"Could not find categories"})
    }
}

module.exports = categoryHandler;