const puppeteer = require('puppeteer');

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
});

afterEach(async () => {
  await browser.close();
});

test('test home page url', async () => {
  const url = await page.url();
  expect(url).toBe('http://localhost:3000/');
});

// test('test cmoponent', async () => {
//   const test = await page.$$eval('.test');
//   expect(test).toBe('Vibranium');
// });
