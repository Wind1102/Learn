import View from "./view.js";
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');


    _generateMarkupNextButton(curPage){
        return `<button data-goto=${curPage + 1} class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>`
    }
    _generateMarkupPrevButton(curPage){
        return  `
        <button data-goto=${curPage - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>
      `
    }

    _generateMarkup(){
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        if(curPage === 1 && numPages > 1){
            return this._generateMarkupNextButton(curPage);
        }
        
        if(curPage === numPages && numPages > 1){
            return this._generateMarkupPrevButton(curPage);
        }

        if(curPage < numPages){
            return `
            ${this._generateMarkupPrevButton(curPage)}
            ${this._generateMarkupNextButton(curPage)}
            `
        }

        return "";

    }


    addHandlerClick(handler){
        this._parentElement.addEventListener('click', function(e){
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;
            const goToPage = btn.dataset.goto; 
            handler(goToPage);
        })
    }
}

export default new PaginationView();