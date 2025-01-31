import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test"
import { PageFixture } from "../hooks/pageObjects"

let browser: Browser
let page: Page


// Before(async function () {
//     browser = await chromium.launch({ headless: false })
//     page = await browser.newPage()
//     PageFixture.page = page;
//     await PageFixture.page.goto('https://qc.goodbookserp.com/4.7/')
//     await PageFixture.page.fill('[data-cy="Database-Input"]', 'MASTERCONTROL');
//     await PageFixture.page.fill('[data-cy="Username-Input"]', 'MasterCtrl');
//     await PageFixture.page.fill('[data-cy="Password-Input"]', 'QC@123');
//     await PageFixture.page.click('.signin-button')
// })

// AfterAll(async function () {
//     await PageFixture.page.close();
//     await browser.close();
// })