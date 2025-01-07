import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime'
import { MODEL_ESC } from './config.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const controlRecipes = async function() {
  try {

      const id = window.location.hash.slice(1);
      if(!id) return;

    resultsView.update(model.getSearchResultsPage())    

  // 1. loading recipe from api
    recipeView.renderSpinner();
  
    await model.loadRecipe(id);

    
    const {recipe} = model.state;
    // 2) Render recipe

    recipeView.render(recipe);
  
    //3 updating bookmarks viwe

    bookmarkView.update(model.state.bookmarks);
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
    resultsView.render(model.getSearchResultsPage())


    // 4. Render initial pagination buttons
    paginationView.render(model.state.search);

  }catch(err){
    resultsView.renderError(err);
  }
}


const controlPagination = function(page){
  resultsView.render(model.getSearchResultsPage(page));
  model.state.search.page = parseInt(page) 
  paginationView.render(model.state.search);
}

const controlServings = function(servings){
  // update the recipe servings(in state)
  model.updateServings(servings);
  //update the view as well
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function(){

  // 1. add or remove bookmarks 
  if(model.state.recipe.bookmarked)
    model.removeBookmark(model.state.recipe.id)
  else
    model.addBookmark(model.state.recipe);

  //2 update recipe view
  recipeView.update(model.state.recipe);

  // 3. render bookmarks
  bookmarkView.render(model.state.bookmarks)
} 

const controlBookmarks =  function(){
  bookmarkView.render(model.state.bookmarks);
}


const controlAddRecipe = async function(newRecipe){
  try{
    // showloading

    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    recipeView.render(model.state.recipe)


    // show message success 
    addRecipeView.renderMessage();


    bookmarkView.render(model.state.bookmarks)

    // change ID of url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    

    // Close model 
    setTimeout(() => {
      addRecipeView.toggleWindow()
    }, MODEL_ESC * 1000);
    

  }catch(err){
    addRecipeView.renderError(err.message);
  }
}

const init = function(){
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  bookmarkView.addHandlerRender(controlBookmarks);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}

init();

// showRecipe();
// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)

