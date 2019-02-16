const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', function(msg){
    for (let i = 0; i < msg.args().length; ++i){
      console.log(`${i}: ${msg.args()[i]}`);
    }
  })
  await page.goto('http://localhost:8080/test');
  const failedSpan = await page.$('span[class=failed]');
  const failedCount = await page.evaluate(function(failedSpan){
    if (failedSpan.textContent != 0){
      console.log(failedSpan.textContent);
      process.exit(1);
    } else {
      console.log('All QUnit tests have passed');
    }
  }, failedSpan)

  await browser.close();
})();