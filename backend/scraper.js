const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const { analyzeSentiment } = require('./analyzer')

const scrapeWebsite = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector('html');
        const html = await page.content();
        await browser.close();

        const $ = cheerio.load(html);

        const contentArray = [];

        $('a:has(span)').each((index, element) => {
            const title = $(element).text();
            const shortDescription = $(element).closest('div').next().text().trim();
            const elementHref = $(element).attr('href')
            const currentItem = {
                title,
                shortDescription,
                href: `${url}${elementHref}`
            };
            contentArray.push(currentItem);
        });

        const images = [];
        $('a img').each((index, element) => {
            const src = $(element).attr('src');
            const image = src ? `${url}${src}` : null;
            images.push(image);
        });

        const words = [];
        const sentiments = [];
        $('div > a:first-child + div').each((index, element) => {
            const text = $(element).text();
            const sentiment = analyzeSentiment(text);
            const textLength = $(element).text().replace(/\s/g, '').length;
            words.push(textLength);
            sentiments.push(sentiment);
        });

        contentArray.forEach((item, index) => {
            item.image = images[index] || null;
            item.words = words[index] || null;
            item.sentiment = sentiments[index] || null;
        });

        return contentArray;
    } catch (error) {
        throw error;
    }
}

module.exports = { scrapeWebsite };
