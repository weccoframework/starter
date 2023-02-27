import { expect, test } from "@playwright/test"

test("page title", async ({ page }) => {
    await page.goto(".")

    await expect(page).toHaveTitle(/weccoframework starter/)
})

test("counter button", async ({ page }) => {
    await page.goto(".")

    const btn = await page.getByRole("button", { name: "" })

    await expect(btn).toHaveText("You clicked me 0 times")
    
    await btn.click()
    
    await expect(btn).toHaveText("You clicked me 1 times")
})