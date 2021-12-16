describe("Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  const nameInput = () => cy.get("input[name=name");
  const userNameInput = () => cy.get("input[name=username");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosInput = () => cy.get("input[name=tos]");
  const submitBtn = () => cy.get('button[id="submitBtn"]');

  it("verifying to ensure tests work", () => {
    expect(3 + 3).to.equal(6);
  });

  it("elements are showing correctly", () => {
    nameInput().should("exist");
    userNameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    tosInput().should("exist");
    submitBtn().should("exist");
  });
});
