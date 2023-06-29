describe('template spec', () => {

//STATUS
  it('Pokemon good assertion', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/chikorita') //Especificando tipo de consulta
    .its('status').should('equal',200)  //Resultado 200 en la consulta de chikorita
  })

  it('Poke bad assertion', () => {
    cy.request({method:"GET", url:"https://pokeapi.co/api/v2/pokemon/Chikorita",failOnStatusCode:false}) //Especificando tipo de consulta
    .its('status').should('equal',404)
  })

//BODY
  it('API testing height', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/chikorita') //Especificando tipo de consulta
    .its('body.height').should('equal',9) //Validamos que Chikorita no esté muy gordo
  })

//DURATION
  it('API testing request time', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon/chikorita') //Especificando tipo de consulta
    .its('duration').should('be.lessThan',120)
  })

})