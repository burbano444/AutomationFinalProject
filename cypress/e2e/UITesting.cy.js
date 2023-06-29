const comparePage = require("../page-objects/comparePage")
const header = require("../page-objects/header")
const homePage = require("../page-objects/homePage")
const topCategoriesPopUp = require("../page-objects/topCategoriesPopUp")

describe('Ecommerce playground automation testing', () => {
  it("Home page loads properly", () => {
    homePage.visit()
    homePage.verifyHomePageLoads()
  })

  it("Compare page loads properly", () => {
    comparePage.visit()
    comparePage.verifyComparePageLoads()
    comparePage.verifyCompareUrl()
  })

  it("Compare items of top collection", () => {
    homePage.visit()
    cy.fixture("products").then((data) => {
      homePage.includeElementsToCompareList(data.topCollection.firstElement)
      homePage.verifyPopUpComparation(data.topCollection.firstElement)
      homePage.includeElementsToCompareList(data.topCollection.secondElement)
      homePage.verifyPopUpComparation(data.topCollection.secondElement)
      homePage.includeElementsToCompareList(data.topCollection.thirdElement)
      homePage.verifyPopUpComparation(data.topCollection.thirdElement)
      homePage.includeElementsToCompareList(data.topCollection.fourthElement)
      homePage.verifyPopUpComparation(data.topCollection.fourthElement)
    })
  })

  it("Use search bar", () => {
    homePage.visit()
    header.verify()
    cy.fixture("products").then((data) => {
      header.searchProduct(data.product.product1)
      header.clickInSearchButton()
      cy.url().should("contain", "&search="+data.product.product1)
    })  
    
  })

  it("Use burguer button",()=>{
    homePage.visit()
    header.clickInBurgerButton()
    topCategoriesPopUp.verifyColumnWasEnable()    
  })

  it("Use exit button",()=>{
    homePage.visit()
    header.clickInBurgerButton()
    topCategoriesPopUp.clickInExitButton()
    topCategoriesPopUp.verifyColumnwasDisable()
  })
})