import { URL } from "../../shared/config";
import { MainPage, EventsPage } from "../../shared/pages";
import { EventPage } from "../../shared/pageUrl";

before(function () {
  cy.visit(`${URL}`);
});

describe("Digital Motors Events Page Tests", () => {

  it("Validate Click on Events Link on the top-nav and Page Loading", () => {
    cy.get(MainPage.EventsLink).click();
    cy.url().should("include", "/events/");

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

  it("Validate H1 Tag", () => {
    cy.get(EventsPage.H1Tag)
      .should("have.text", "Learn about our activities.");
  });

});
