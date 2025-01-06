import { async } from 'regenerator-runtime';
import  {API_URL} from './config.js';
import { API_KEY } from './config.js';
import { getJson } from './helper.js';
import {PAGE_PAGINATION } from './config.js';


export const state = {
    recipe: {},
    search : {
        query: '',
        results: [],
        resultsPerPage: PAGE_PAGINATION,
        page: 1
    }
};

export const loadRecipe = async function(id) {
    try{

    const data = await getJson(`${API_URL}/${id}`);
    console.log(data);
    const { recipe } = data.data;
    state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        source_url: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients
        
    } 
    console.log(state.recipe);
    }
    catch(err){
        throw err;
    }
};


export const loadSearchResult = async function(query) {
    try{

        const data = await getJson(`${API_URL}?search=${query}&key=${API_KEY}`)
        const { recipes } = data.data;
        state.search.query = query;
        recipes.forEach(rec => state.search.results.push(
            {
                id: rec.id,
                image: rec.image_url,
                publisher: rec.publisher,
                title: rec.title,
            }
        ));
    }catch(err){
        throw err;
    }
}

export const getSearchResultsPage = function(page= state.search.page){
  state.search.page = page;
  const start = (page-1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage; 
  return state.search.results.slice(start,end);  
} 
