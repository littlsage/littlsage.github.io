import puppeteer, { PDFOptions } from "puppeteer";

const convertPageToPDF = async (url: string, options?: PDFOptions) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  await page.emulateMediaType("screen");

  const pdf = await page.pdf(options);

  await browser.close();

  return pdf;
};

export { convertPageToPDF };
