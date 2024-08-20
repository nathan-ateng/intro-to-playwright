import { test, expect } from "@playwright/test";
test.describe("Learning Assertions", async () => {
  test("Verify webpage behaviour", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");
    // 1. Expect Page to have URL
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/");
    await page.pause();

    // 2. Expect page to have title
    await expect(page).toHaveTitle("The Internet");
  });

  test("More on assertions", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");

    // 1. Assert visibility
    await expect(page.locator(".heading")).toBeVisible;

    await page.pause();

    // 2. Assert element to have text
    await expect(page.locator("h2")).toHaveText("Available Examples");

    // 3. Expect element to contain certain text
    await expect(page.locator("body")).toContainText("WYSIWYG");
  });

  test("Continue with assertions", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");

    //1. Assert count of links
    await expect(page.locator("a")).toHaveCount(46);

    // 2. Expect boxes to be checked
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    await page.getByRole("checkbox").first().check();
    await page.getByRole("checkbox").nth(1).uncheck();

    await expect(page.getByRole("checkbox").first()).toBeChecked;
    await expect(page.getByRole("checkbox").nth(1)).not.toBeChecked();
  });

  test("Assert text boxes", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    // 1. Assert username in field
    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("SuperSecretPassword!");
    await expect(page.locator("#username")).toHaveValue("tomsmith");

    // 2. Check if element is enabled
    await expect(page.locator('button[type="submit"]')).toBeEnabled();
    await page.pause();
  });
});
