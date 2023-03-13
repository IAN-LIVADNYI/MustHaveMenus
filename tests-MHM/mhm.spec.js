// @ts-check
import { test, expect, chromium} from '@playwright/test';
// const { test, expect,chromium } = require('@playwright/test');
const mainPage = 'https://www.musthavemenus.com/';

test.describe('Main Page: Logged out',()=> {

  test.beforeEach(async ({page}) => {
    // await page.goto(mainPage);
  });

test('MP-1: MHM logo button is clickable and working', async ({page}) => {
  const mhmLogolink = page.locator('.icon.mhm-logo');
  const templateTab = page.locator('//a[@class="more-page dropdown-toggle"][contains(text(),"Templates")]')

  await expect(mhmLogolink).toBeEnabled();

  await templateTab.click();
  await mhmLogolink.click();

  await expect(page).toHaveURL(/.*www.musthavemenus.com/);
  });

  test.only('MP-13/1: Book A Demo button is working', async () => {

      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();

    // Navigate to a page that opens a new tab
      await page.goto(mainPage);

      // Click a link that opens a new tab
      const bookAdemoButton = page.locator('//a[@class="btn btn-brand-sq"][normalize-space()="Book a Demo"]');
      await bookAdemoButton.click();

      // Get an array of all pages
      const pages = context.pages();

      // Switch to the second tab
      const secondTab = pages[1];
      await secondTab.bringToFront();
      // await page.pause();

      // Do something on the second tab
      await expect(secondTab).toHaveURL('https://calendly.com/mhmcustomer-success/30minute?month=2023-03');

      await browser.close();
    });

  test('MP-2: MHM logo icon is visible', async ({page}) => {
    const mhmLogolink = page.locator('.icon.mhm-logo');

    await expect(mhmLogolink).toBeVisible();
  });

  // test('MP-5: MHM logo icon is clickable ', async ({page}) => {
  //   const mhmLogolink = page.locator('.icon.mhm-logo');
  //
  //   await expect(mhmLogolink).toBeEnabled();
  // });

  test('MP-3: Templates tab is visible', async ({page}) => {
    const templateTab = page.locator('//a[@class="more-page dropdown-toggle"][contains(text(),"Templates")]')

    await expect(templateTab).toBeVisible();
  });

  test('MP-4: Templates tab is clickable and working', async ({page}) => {
    const templateTab = page.locator('//a[@class="more-page dropdown-toggle"][contains(text(),"Templates")]')
    await expect(templateTab).toBeEnabled();

    await templateTab.click();
    await expect(page).toHaveURL('https://www.musthavemenus.com/menu/browse.do');
  });

  test('MP-6: Digital tab is visible', async ({page}) => {
    const digitalTab = page.locator('//a[@class="more-page dropdown-toggle"][normalize-space()="Digital"]')

    await expect(digitalTab).toBeVisible();
  });

  test('MP-7: Digital tab is clickable and working', async ({page}) => {
    const digitalTab = page.locator('//a[@class="more-page dropdown-toggle"][normalize-space()="Digital"]')
    await expect(digitalTab).toBeEnabled();

    await digitalTab.click();
    await expect(page).toHaveURL('https://www.musthavemenus.com/feature/restaurant-digital-marketing.html')
  });

  test('MP-8: Explore tab is visible', async ({page}) => {
    const exploreTab = page.locator('//a[@class="more-page dropdown-toggle"][normalize-space()="Explore"]')

    await expect(exploreTab).toBeVisible();
  });

  test('MP-9: Explore tab is clickable and working', async ({page}) => {
    const exploreTab = page.locator('//a[@class="more-page dropdown-toggle"][normalize-space()="Explore"]')
    await expect(exploreTab).toBeEnabled();

    await exploreTab.click();
    await expect(page).toHaveURL('https://www.musthavemenus.com/feature/explore.html')
  });

  test('MP-10: Pricing tab is visible', async ({page}) => {
    const pricingTab = page.locator('//a[@class="more-page dropdown-toggle"][normalize-space()="Pricing"]')

    await expect(pricingTab).toBeVisible();
  });

  test('MP-11: Pricing tab is clickable and working', async ({page}) => {
    const pricingTab = page.locator('//a[@class="more-page dropdown-toggle"][normalize-space()="Pricing"]')
    await expect(pricingTab).toBeEnabled();

    await pricingTab.click();
    await expect(page).toHaveURL('https://www.musthavemenus.com/menu/pricing.do')
  });

  test('MP-12: Book A Demo button is visible', async ({page}) => {
    const bookAdemoButton = page.locator('//a[@class="btn btn-brand-sq"][normalize-space()="Book a Demo"]')

    await expect(bookAdemoButton).toBeVisible();
  });

  test('MP-13: Book A Demo button is clickable', async ({page}) => {
    const bookAdemoButton = page.locator('//a[@class="btn btn-brand-sq"][normalize-space()="Book a Demo"]');

    await expect(bookAdemoButton).toBeEnabled();
  });

  test('MP-14: Search Bar is visible', async ({page}) => {
    const searchBar = page.locator('//ul/div/input[@class="header-search-bar"]');

    await expect(searchBar).toBeVisible();
  });

  test('MP-15: Search Bar is clickable', async ({page}) => {
    const searchBar = page.locator('//ul/div/input[@class="header-search-bar"]');

    await expect(searchBar).toBeEnabled();
  });

  test('MP-16: Search Bar has the up-to-date caption, and it is visible', async ({page}) => {
    // const searchBar = page.locator('//ul/div/input[@class="header-search-bar"]');
    const placeholder = page.getByPlaceholder('Search 20,000 templates').nth(0);

    await expect(placeholder).toBeVisible();
  });

  test('MP-17: Search bar is working',async ({page})=>{
    const placeholder = page.locator('//ul/div/input[@placeholder="Search 20,000 templates"]');
    await placeholder.fill('Christmas');
    await placeholder.press('Enter');
    const header = page.getByRole('strong');

    await expect(header).toHaveText('christmas');
  });

  test('MP-18: Try It Free is visible', async ({page})=>{
  const tryItFreeButton = page.locator('//a[@class="btn btn-brand-sq"][normalize-space()="Try it free"]');

  await expect(tryItFreeButton).toBeVisible();
  });

  test('MP-19: Try It Free is clickable and working',async ({page})=>{
    const tryItFreeButton = page.locator('//a[@class="btn btn-brand-sq"][normalize-space()="Try it free"]');
    await expect(tryItFreeButton).toBeEnabled();

    await tryItFreeButton.click();
    await expect(page).toHaveURL('https://www.musthavemenus.com/account/register');
  });

  test('MP-20: The Log In button is visible', async ({page})=>{
    const logInButton = page.locator('//a[@class="btn btn-brand-sq"][normalize-space()="Log In"]');

    await expect(logInButton).toBeVisible();
  })

  test('MP-21: The Log In button is clickable and working', async ({page})=>{
    const logInButton = page.locator('//a[@class="btn btn-brand-sq"][normalize-space()="Log In"]');
    await expect(logInButton).toBeEnabled();

    await logInButton.click();
    await expect(page).toHaveURL('https://www.musthavemenus.com/account/login');
  });

  test('MP-22: has a title "The Ultimate Design Tool for Restaurants"',async({page})=>{
    const mainTitle = page.locator('//div[@class="hero-text"]/h1');

    await expect(mainTitle).toHaveText('The Ultimate Design Tool for Restaurants');
  });

  test('MP-23: has a subtitle - see below',async({page})=>{
    //Design, print, and share online all from one place. With our thousands of design templates, creativity comes easily!
    const subTitleLoc = page.locator('//div[@class="hero-text"]/h4');
    const subTitle = 'Design, print, and share online all from one place. With our thousands of design templates, creativity comes easily!';

    await expect(subTitleLoc).toHaveText(subTitle);
  });

  test('MP-24: The "Get Started For Free" button is visible',async({page})=>{
    const getStartedForFreeBtn = page.locator('(//a[@class="visitorOptionSignup btn lg btn-brand-sq"])[1]');

    await expect(getStartedForFreeBtn).toBeVisible();
  });

  test('MP-25: The "Get Started For Free" button is clickable and working',async({page})=>{
    const getStartedForFreeBtn = page.locator('(//a[@class="visitorOptionSignup btn lg btn-brand-sq"])[1]');
    await expect(getStartedForFreeBtn).toBeEnabled();

    await getStartedForFreeBtn.click();
    await expect(page).toHaveURL('https://www.musthavemenus.com/account/register');
  });

})