import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

async function login(page: Page) {
  await page.goto('http://localhost:8000');
  await page.waitForNavigation();
  await page.type('#username', 'john@doe.com');
  await page.type('#password', 'user');
  await page.click('#loginbtn');
}

describe('[SUITE] End-to-end testing', () => {
  let context: BrowserContext;
  let browser: Browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  beforeEach(async () => {
    context = await browser.createIncognitoBrowserContext();
  });

  it('[END_TO_END] Should sucessfully edit opportunity', async () => {
    const page = await context.newPage();
    page.setDefaultTimeout(10000);

    await page.goto('http://localhost:8000');
    await page.waitForNavigation();

    await login(page);
    await page.goto('http://localhost:8000/opportunities');

    await (await page.waitForSelector('#editopportunity')).click();

    const topicInput = await page.$(
      'table > tbody > tr > td > div > div > div > div > span > input',
    );

    await topicInput.click({ clickCount: 3 });
    await topicInput.type('Opportunity topic');

    await (await page.waitForSelector('#save')).click();

    const topicCell = await page.waitForSelector(
      'tr[data-row-key="0"] > .ant-table-cell',
    );

    const value = await page.evaluate((el) => el.textContent, topicCell);

    expect(value).toBe('Opportunity topic');
  });

  afterEach(() => context.close());

  afterAll(() => browser.close());
});
