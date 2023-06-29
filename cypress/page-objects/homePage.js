class homePage {
    constructor() {
    }

    element = {
        homeButton: () => cy.get(".title").contains("Home"),
        topCollection: () => cy.get("#entry_213264"),
        compareButton: () => cy.get('[title="Compare this Product"]'),
        popUpAddComparation: () => cy.get("#notification-box-top")
    }

    visit() {
        cy.visit("")
    }

    verifyHomePageLoads() {
        this.element.homeButton().should("be.visible")
    }

    includeElementsToCompareList(position) {
        this.element.topCollection().within(() => {
            cy.get(".product-thumb-top").eq(position).within(() => {
                cy.get(".product-action").should('have.class', 'product-action').invoke('removeClass', 'product-action');
                this.element.compareButton().click()
            })
        })
    }

    verifyPopUpComparation(position){
        let newposition=position+1;
        this.element.popUpAddComparation().contains("Product Compare ("+newposition+")")
    }

}

module.exports = new homePage();