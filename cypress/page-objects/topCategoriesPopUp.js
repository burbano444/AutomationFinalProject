class topCategoriesPopUp{
    constructor(){
    }

    element = {
        topElementsTitle:()=> cy.get("#mz-component-1626147655 > h5"),
        exitButton:()=> cy.get("#mz-component-1626147655 > .m-0 > .fas")
    }

    verifyColumnWasEnable(){
        this.element.topElementsTitle().should("be.visible")
    }

    clickInExitButton(){
        this.element.exitButton().click()
    }

    verifyColumnwasDisable(){
        this.element.topElementsTitle().should("not.be.visible")
    }
}

module.exports = new topCategoriesPopUp();




