import { test, expect } from "@playwright/test";

test.only("Learning selectors", async ({ page }) => {
  // navigate to webpage
  await page.goto("http://127.0.0.1:5500/clickme.html");

  // 1.Selecting by ID
  await page.locator("#clickButton").click();

  // 2.Select by class
  await page.locator(".button-style").click();

  // 3.select by tag and class
  await page.locator("button.button-style").click();

  // 4.Select by attribute value
  await page.locator('[data-action="increment"]').click();

  // 5.Select by text content
  await page.locator("text=CLICK ME").click();

  // 6.Select using class and text content(using exact text match)
  await page.locator('.button-style:text("CLICK ME")').click();

  // 7.Select using class and partial text
  await page.locator('button:has-text("click")').click();

  // 8. Selecting using attribute and text
  await page.locator('[data-action="increment"]:text("CLICK ME")').click();

  // 9.Using playwright locators
  await page.getByText("CLICK ME").click();

  await expect(page.locator("#counter")).toContainText("9");
  await page.pause();
});
