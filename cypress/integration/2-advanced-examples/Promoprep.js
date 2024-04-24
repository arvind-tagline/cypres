describe("The Home Page", () => {
  it("successfully loads", () => {
    // cy.visit("http://localhost:4400/");
    cy.visit("https://staging.promoprep.com/");
    cy.get("#login_email").type("tejas.tagline@gmail.com");
    cy.get("#login_password").type("Test@123");
    cy.get("#login_signin_submit").click();
  });
});
