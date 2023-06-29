class header{
    constructor(){
    }

    element = {
        lambdaImage:()=> cy.get("#entry_217821"),
        searchBar:()=> cy.get('input[name="search"]').eq(0),
        searchButton: ()=> cy.get("#search > div.search-button").eq(0),
        burguerButton: ()=> cy.get("#entry_217833 > a")
    }

    verify(){
        this.element.lambdaImage().should("be.visible")
    }

    searchProduct(product){

        this.element.searchBar().type(product)
    }

    clickInSearchButton(){
        this.element.searchButton().click()
    }

    clickInBurgerButton(){
        this.element.burguerButton().click()
    }
    
}

module.exports = new header();