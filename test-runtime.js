import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
  
  await page.goto('http://localhost:3000');
  
  // Wait a few seconds for any React errors to pop up
  await page.waitForTimeout(3000);
  
  await browser.close();
  process.exit(0);
})();
