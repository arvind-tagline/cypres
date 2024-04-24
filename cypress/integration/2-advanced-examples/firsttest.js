describe("The Home Page", () => {
  //   it("successfully loads", () => {
  //     cy.visit("https://ecommerce-40e3d.web.app");
  //     cy.title().should("eq", "Ecommerce");
  //     cy.get(":nth-child(1) > .form-control").clear().type("admin@arvind.com");
  //     cy.get(".btn").click(); //login
  //     cy.get(":nth-child(1) > .m-3 > .btn").click(); //add product
  //     cy.get(":nth-child(1) > .form-control").type("Mouse"); //product name input
  //     cy.get(":nth-child(2) > .form-control").type("600"); //price
  //     cy.get(":nth-child(3) > .form-control").type("7"); //returntime
  //     cy.get(":nth-child(4) > .form-control").type(
  //       "https://firebasestorage.googleapis.com/v0/b/ecommerce-40e3d.appspot.com/o/mouse.jpeg?alt=media&token=c8b3586f-a672-444e-b15a-6c2aa3d36051"
  //     ); //image path
  //     cy.get(".text-center > .btn").click(); //add item
  //     cy.get(".d-flex > .btn").click(); //back dashboard admin
  //     cy.get(":nth-child(2) > .m-3 > .btn").click(); //view products
  //     cy.get(":nth-child(11) > :nth-child(8) > .text-danger > .fas").click(); //deleted product
  // cy.get(
  //   ":nth-child(3) > .col-md-12 > .d-flex > :nth-child(2) > .btn"
  // ).click(); //add to cart product
  // cy.wait(3000);
  // cy.get(":nth-child(2) > .nav-link > .fas").click(); //go to cart
  // cy.wait(3000);
  // cy.get(".card-footer > .btn").click(); //place order
  // cy.wait(3000);
  // cy.get(".modal-footer > .btn-primary").click(); //order now
  // cy.wait(3000);
  // cy.get(".modal-footer > .btn-danger"); //cancle order
  // cy.get(":nth-child(2) > .m-3 > .btn").click();
  // cy.get(":nth-child(11) > :nth-child(8) > .text-danger > .fas").click();
  //   cy.get("")

  // cy.get(".form-control").type("keyboard");
  //   });
  it("successfully loads", () => {
    cy.visit("http://localhost:4200/login");
    cy.get(".btn-primary").click();
    cy.wait(4000);
    cy.url().should("include", "/customer");
    cy.get(
      ":nth-child(1) > .col-md-12 > .d-flex > :nth-child(2) > .btn"
    ).click();
    cy.get(":nth-child(2) > .nav-link > .fas").click();
    // cy.get(":nth-child(3) > .ms-3 > h5").click();
  });

  //   it("Faild loads", () => {
  //     cy.visit("https://ecommerce-40e3d.web.app");
  //     cy.title().should("eq", "ecommerce");
  //   });

  //radio button checked
  //   cy.get("input[value=radioValue]").should("be.visible").should("be.checked");//selected radio
  //   cy.get("input[value=radioValue]")
  //     .should("be.visible")
  //     .should("not.be.checked");unselected radio

  //checkBod condition
  //   cy.get("#checkBoxid")
  //     .check()
  //     .should("be.checked")
  //     .and("have.value", "CheckBoxvalue");
  //   //check uncheck checkBox
  //   cy.get("#checkBoxid").uncheck().should("not.be.checked");
});
