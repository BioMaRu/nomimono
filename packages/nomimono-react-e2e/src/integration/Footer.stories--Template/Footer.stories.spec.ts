describe('nomimono-react: Template component', () => {
	beforeEach(() => cy.visit('/iframe.html?id=template--primary'))

	it('should render the component', () => {
		cy.get('h1').should('contain', 'Welcome to Template!')
	})
})
