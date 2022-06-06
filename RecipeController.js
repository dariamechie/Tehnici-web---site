///http:localhost:300/recipes este ruta sau endpoint!!!!!
let express = require('express');
let router = express.Router();

const recipeService = require("../service/RecipeService");


router.post("/recipes", (req, res) => {
    let newRecipe = recipeService.addRecipe(req.body);
    res.status(200).send(newRecipe);
  });
  
  // Read One
router.get("/recipes/:id", (req, res) => {
    const RecipesList = readJSONFile();
    // Fill in your code here
  });

  // Read All
router.get("/recipes", (req, res) => {    //  req = request; res = response
    const recipesList = recipeService.getAllRecipes();
    if (recipesList!==undefined && recipesList.length!==0) {
        res.status('200').send(recipesList);
    } else {
        res.status('204').send('No recipe found!');
    }
  });
  
  // Update
  
router.put("/recipes/:id", (req, res) => {
  let foundRecipe = recipeService.updateRecipe(req.params.id, req.body.name, req.body.img);
  if (foundRecipe!==null) res.status(200).send(foundRecipe);
  else res.status(204).send('No recipe found');
  });
  
  // Delete
router.delete("/recipes/:id", (req, res) => {
  let foundRecipe = recipeService.removeRecipe(req.params.id);
  if (foundRecipe!==null) res.status(200).send(foundRecipe);
  else res.status(204).send('No recipe found');
    
  });

  module.exports = router;
