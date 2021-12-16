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

  describe("Filling out the inputs", () => {
    it("correctly navigates to the site", () => {
      cy.url().should("include", "localhost");
    });

    it("can type in the inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("Jello")
        .should("have.value", "Jello");
      userNameInput()
        .should("have.value", "")
        .type("CoolUserName")
        .should("have.value", "CoolUserName");
      emailInput()
        .should("have.value", "")
        .type("catchyemail@gmail.com")
        .should("have.value", "catchyemail@gmail.com");
      passwordInput()
        .should("have.value", "")
        .type("myPassword*")
        .should("have.value", "myPassword*");
    });

    it("submit button starts out disabled", () => {
      submitBtn().should("be.disabled");
    });

    it("Terms of Services is able to be checked", () => {
      tosInput()
        .should("not.be.checked")
        .check({ force: true })
        .should("be.checked");
    });

    it("submit button enables when all inputs are filled out", () => {
      nameInput().type("Jane Doe");
      userNameInput().type("janedoe13");
      emailInput().type("janekatedoe14@gmail.com");
      passwordInput().type("myPassword*");
      tosInput().check({ force: true });
      submitBtn().should("not.be.disabled");
    });
  });
});
