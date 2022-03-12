import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

async function login(page: Page) {
  await page.goto('http://localhost:8000');
  await page.waitForNavigation();
  await page.type('#username', 'john@doe.com');
  await page.type('#password', 'user');
  await page.click('#loginbtn');
}

describe('[SUITE] Integration testing', () => {
  let context: BrowserContext;
  let browser: Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  beforeEach(async () => {
    context = await browser.createIncognitoBrowserContext();
  });

  it('[INTEGRATION] Should successfully block unauthorized access (plugin-access)', async () => {
    const page = await context.newPage();
    page.setDefaultTimeout(10000);

    await login(page);
    await page.goto('http://localhost:8000/workflow');

    const message = await page.waitForSelector('#unauthorized');
    const value = await page.evaluate((el) => el.textContent, message);

    expect(value).toBe('Sorry, you are not authorized to access this page.');
  });

  afterEach(() => context.close());

  afterAll(() => browser.close());
});
