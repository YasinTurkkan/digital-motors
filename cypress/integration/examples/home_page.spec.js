import { URL } from "../../shared/config";
import { MainPage } from "../../shared/pages";

before(function() {
  cy.visit(`${URL}`);
});

describe("Digital Motors Main Page Tests", () => {

  it("Validate The Page Load", () => {

    //make sure page loads
    cy.get(".ocm-effect-wrap")
      .parent("body")
      .then(($body) => {
        return new Cypress.Promise((resolve) => {
          // Cypress will wait for this Promise to resolve
          const onQueryEnd = () => {
            debugger;
            clearTimeout(timeout);
            $body[0].removeEventListener("PageReady", onQueryEnd); // cleanup
            resolve(); // resolve and allow Cypress to continue
          };
          $body[0].addEventListener("PageReady", onQueryEnd);
          // Proceed if no event after 8 seconds
          const timeout = setTimeout(onQueryEnd, 8000);
        });
      });
  });

  it("Validate Page Title", () => {
    cy.title()
      .should("eq", `Solutions | Digital Motors is the industry’s premier online sales solution.`)
      .url()
      .should("eq", "https://digitalmotors.com/");
  });

  it("Validate Linkedin Link", () => {
    cy.get(MainPage.LinkedinLink)
      .scrollIntoView({ duration: 1000 })
      .should("have.attr", "href")
      .and("include", "https://www.linkedin.com/company/digitalmotors");
  })

});
