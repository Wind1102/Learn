import icons from 'url:../../img/icons.svg';
import View from './view.js'; 
import previewView from './previewView.js';
class ResultsView extends View{
    
    _parentElement = document.querySelector('.results');
    _errorMessage = "No recipes found for your query! Please try again";
    _message;


    _generateMarkup(listRecipe){
        return listRecipe.map(recipe => previewView.render(recipe,false)).join(''); 
        
        
    }

}

export default new ResultsView();