class comparePage{
    constructor(){
        this.url="index.php?route=product/compare"
    }

    element = {
        compareBody: ()=> cy.get("#product-compare > div").contains("Product Comparison")
    }

    visit(){
        cy.visit(this.url)
    }

    verifyComparePageLoads(){
        this.element.compareBody().should("be.visible")
    }

    verifyCompareUrl(){
        cy.url().should('include', '/compare')
    }
}

module.exports = new comparePage();