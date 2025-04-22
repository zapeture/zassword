describe("Password Generator E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should generate a password when the button is clicked", () => {
    // Get the initial password value (might be empty or default generated)
    cy.get('input[aria-label="Generated Password"]')
      .invoke("val")
      .then((initialPassword) => {
        // Click the generate button
        cy.get("button").contains("Generate Password").click();

        // Check that the password value has changed (or is not empty)
        cy.get('input[aria-label="Generated Password"]')
          .invoke("val")
          .should((newPassword) => {
            expect(newPassword).not.to.eq(initialPassword);
          })
          .should("not.be.empty")
          .should("not.contain", "Select at least one character type");

        // Check if the strength indicator appears
        cy.contains("label", "Strength").should("be.visible");
        cy.get('div[role="progressbar"]').should("be.visible");
      });
  });

  it("should change password length using the slider", () => {
    const targetLength = 20;
    cy.get('[data-slot="slider-track"]') // Changed selector to target the track
      .first()
      .should("be.visible")
      // Calculate the percentage position for the target length (assuming min=6, max=32)
      .then(($track) => {
        const min = 6;
        const max = 32;
        const percentage = (targetLength - min) / (max - min);
        const trackWidth = $track.width() || 0;
        const clickX = trackWidth * percentage;

        cy.wrap($track).click(clickX, 0, { force: true });
      });

    cy.contains('[class*="text-purple-400"]', targetLength.toString()).should(
      "be.visible"
    );

    cy.get("button").contains("Generate Password").click();
    cy.get('input[aria-label="Generated Password"]')
      .invoke("val")
      .should("have.length", targetLength);
  });
});
