const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('url');

  // Returns runtime metrics of the page
  const metrics = await page.metrics();
  console.info(metrics);

  await browser.close();
})();

{
   Timestamp: 6400.768827, // When the metrics were taken
   Documents: 13, // Number of documents
   Frames: 7, // Number of frames
   JSEventListeners: 33, // Number of events
   Nodes: 51926, // Number of DOM elements
   LayoutCount: 6, // Number of page layouts
   RecalcStyleCount: 13, // Number of page style recalculations
   LayoutDuration: 0.545877, // Total duration of all page layouts
   RecalcStyleDuration: 0.011856, // Total duration of all page style recalculations
   ScriptDuration: 0.064591, // Total duration of JavaScript executions
   TaskDuration: 1.244381, // Total duration of all performed tasks by the browser
   JSHeapUsedSize: 17158776, // Actual memory usage by JavaScript
   JSHeapTotalSize: 33492992 // Total memory usage, including free allocated space, by JavaScript
}
