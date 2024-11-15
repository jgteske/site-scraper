import axios from 'axios';
import * as cheerio from 'cheerio';
import { ScrapeData } from '../models/scrapeSite';

export async function cheerioScrapeSite(url: string): Promise<ScrapeData[]> {
  const data = await axios.get(url);
  const page = data.data;
  const $ = cheerio.load(page);
  // get all data inside .quote class
  const results: ScrapeData[] = [];
  $('.quote').each((i, elem) => {
    const text = $(elem).find('.text').text();
    const author = $(elem).find('.author').text();
    const tags: string[] = [];
    $(elem)
      .find('.tag')
      .each((i, elem) => {
        tags.push($(elem).text());
      });
    results.push({ text, author, tags });
  });

  return results;
}
