import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime'


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function() {
  try {

      const id = window.location.hash.slice(1);
      console.log(id)
      if(!id) return;

  // 1. loading recipe from api
    recipeView.renderSpinner();
  
    await model.loadRecipe(id);

    
    const {recipe} = model.state;
    // 2) Render recipe

    recipeView.render(recipe);
  

  }
  catch(err) {
    recipeView.renderError(err)
  }
} 


const controlSearchResults = async function() {
  try {
    // 1. get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2. Load  search results
    resultsView.renderSpinner();
    await model.loadSearchResult(query);

    // 3. render results
    resultsView.render(model.getSearchResultsPage(6))


    // 4. Render initial pagination buttons
    paginationView.render(model.state.search);

  }catch(err){
    resultsView.renderError(err);
  }
}

const init = function(){
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();

// showRecipe();
// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)

