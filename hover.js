/**
 * @name hover
 *
 * @desc The hover function is a combination of scrolling and putting the mouse into a hover state over the requested element.
 * This example hovers the first track we find on the soundcloud.com homepage, which should trigger the play and like
 * buttons to be visible
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagehoverselector}
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('url')
  await page.hover('.selector')
  await page.screenshot({ path: 'hover.png' })
  await browser.close()
})()
