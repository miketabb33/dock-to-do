import { id } from './idMap'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get(id.noToDo)

    const item1 = 'clean the car'
    cy.get(id.addInput).type(item1)
    cy.get(id.addInputButton).click()
    cy.get(id.toDoItem(1)).should('have.text', item1)
    assertTodoLengthOf(1)

    const item2 = 'make bed'
    cy.get(id.addInput).type(item2)
    cy.get(id.addInputButton).click()
    cy.get(id.toDoItem(2)).should('have.text', item2)
    assertTodoLengthOf(2)

    const item3 = 'make deviled eggs'
    cy.get(id.addInput).type(item3)
    cy.get(id.addInputButton).click()
    cy.get(id.toDoItem(3)).should('have.text', item3)
    assertTodoLengthOf(3)

    const item4 = 'build bookshelf'
    cy.get(id.addInput).type(item4)
    cy.get(id.addInputButton).click()
    cy.get(id.toDoItem(4)).should('have.text', item4)
    assertTodoLengthOf(4)

    cy.get(id.trashButton(3)).click()
    assertTodoLengthOf(3)

    const newItem = 'sand bookshelf'
    cy.get(id.editButton(3)).click()
    cy.get(id.editInput(3)).clear()
    cy.get(id.editInput(3)).type(newItem)
    cy.get(id.editInputButton(3)).click()
    cy.get(id.toDoItem(3)).should('have.text', newItem)
  })
})

const assertTodoLengthOf = (count: number) => {
  cy.get(id.toDoItems).find('div').should('have.length', count)
}
