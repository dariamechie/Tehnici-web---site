const uuid = require("uuid");
const recipeRepository = require("../repository/RecipeRepository")

module.exports.getAllRecipes = () =>{
    const recipesList = recipeRepository.readJSONFile();
    return recipesList;
}

module.exports.addRecipe = (newRecipe) =>{
    const recipesList = recipeRepository.readJSONFile();
    newRecipe.id = uuid.v4.apply();
    recipesList.push(newRecipe);
    recipeRepository.writeJSONFile(recipesList);
    return newRecipe;
}

module.exports.updateRecipe = (recipeID, recipeName, recipeImg) => {
    const precipeList = recipeRepository.readJSONFile();
  
    let foundRecipe=null;
    for (let i=0; i<recipeList.length; i++) 
        if (recipeList[i].id===recipeID) {
            recipeList[i].name=recipeName;
            recipeList[i].img=recipeImg;
            foundRecipe=recipeList[i];
            break;
        }
  
    recipeRepository.writeJSONFile(recipeList);
    return foundRecipe;
}

 module.exports.removeRecipe = (recipeID) => {
     const recipesList = recipeRepository.readJSONFile();
    
       for (let i=0; i<recipesList.length; i++) 
           if (recipesList[i].id===recipeID) {
               recipesList.splice(i, 1);
               foundRecipe=recipesList[i];
               break;
           }
    
    recipeRepository.writeJSONFile(recipesList);
    return foundRecipe
 }