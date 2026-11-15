import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("Portfolio App", () => {
  it("should load the portfolio page, toggle theme, and allow entering a contact message", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://react-portfolio-six-gamma.vercel.app" });

    const assertResult = await testdriver.assert("ADITYA JADON is displayed on the page");
    expect(assertResult).toBeTruthy();

    const themeToggle = await testdriver.find("theme toggle sun icon");
    await themeToggle.click();

    const darkThemeAssert = await testdriver.assert("the theme is in dark mode with a dark background");
    expect(darkThemeAssert).toBeTruthy();

    await testdriver.pressKeys(["escape"]);
    await testdriver.scroll("down", { amount: 300 });

    const textarea = await testdriver.find("Message textarea");
    await textarea.click();
    await testdriver.type("Hello, this is an automated test from TestDriver.ai!");

    const msgAssert = await testdriver.assert("The message textarea contains 'Hello, this is an automated test from TestDriver.ai!'");
    expect(msgAssert).toBeTruthy();
  });
});
