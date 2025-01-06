import icons from 'url:../../img/icons.svg';
import View from './view.js'; 
class ResultsView extends View{
    
    _parentElement = document.querySelector('.results');
    _errorMessage = "No recipes found for your query! Please try again";
    _message;


    _generateMarkup(listRecipe){
        return listRecipe.map(recipe => this._renderSearchResult(recipe)).join(''); 
        
        
    }

    _renderSearchResult(recipe){
      return `
            <li class="preview">
            <a class="preview__link preview__link--active" href="#${recipe.id}">
              <figure class="preview__fig">
                <img src="${recipe.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">${recipe.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}_icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `
  }


}

export default new ResultsView();