import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber"
import { PageFixture } from "../../hooks/pageObjects"
import { test, expect } from "@playwright/test";

setDefaultTimeout(60 * 1000 * 2)
Given("login to the erp site", { timeout: 500000 }, async function () {
    await PageFixture.page.goto('https://qc.goodbookserp.com/4.7/')
})
When("I enter the server name {string}", async function (server) {
    await PageFixture.page.fill('[data-cy="Database-Input"]', server);
})
Then("I enter the user name {string}", async function (user) {
    await PageFixture.page.fill('[data-cy="Username-Input"]', user);
})
Then("I enter the password {string}", async function (password) {
    await PageFixture.page.fill('[data-cy="Password-Input"]', password);
})
Then("I click the submit button", async function () {
    await PageFixture.page.click('.signin-button')
})
Then("Verify page header {string} should be visible",async function (name) {
    const hrmsElement = PageFixture.page.locator(name);
    await expect(hrmsElement).toBeVisible();
})
Then("I click the menu bar", async function () {
    await PageFixture.page.waitForTimeout(1000);
    await PageFixture.page.locator('[data-cy="ModuleList"]').click();
})
Then("I navigate through the following path:", async function (dataTable) {
    const navigatePath = dataTable.hashes()[0];

    // Click Module
    if (navigatePath.Module) {
        const moduleLocator = PageFixture.page.locator(`[data-cy="${navigatePath.Module}-Module"]`);
        await moduleLocator.waitFor({ state: "visible" });
        await moduleLocator.click();
    }

    // Click Form
    if (navigatePath.Form) {
        const formLocator = PageFixture.page.locator(`[data-cy="${navigatePath.Form}-MenuFolder"]`);
        await formLocator.waitFor({ state: "visible" });
        await formLocator.click();
    }

    // Click Screen
    if (navigatePath.Screen) {
        const screenLocator = PageFixture.page.locator(`[data-cy="${navigatePath.Screen}-MenuFolder"]`);
        await screenLocator.waitFor({ state: "visible" });
        await screenLocator.click();
    }

    // Click SubScreen
    if (navigatePath.SubScreen) {

Given('Verify page header {string} should be visible', (s: string) => {
  // Write code here that turns the phrase above into concrete actions
})
        const subScreenLocator = PageFixture.page.locator(`[data-cy="${navigatePath.SubScreen}-MenuData"]`);
        await subScreenLocator.waitFor({ state: "visible" });
        await subScreenLocator.click();
    }
});
