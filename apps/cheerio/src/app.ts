import 'dotenv/config';
import { cheerioScrapeSite } from './utils/cheerioScrapeSite';
import { ScrapeData } from './models/scrapeSite';
import { convertJsonToCsv, saveCsvToFile } from './utils/convertJSONtoCSV';

const url = process.env.URL;

if (!url) {
  throw new Error('No url defined! Aborting...');
} else {
  console.log('URL: ', url);
}

cheerioScrapeSite(url)
  .then((result) => {
    //console.log(result);
    const csv = convertJsonToCsv(result);
    console.log(result);
    const timestamp = Date.now();
    const filename = `scraped-${timestamp}.csv`;

    saveCsvToFile(csv, filename);
  })
  .catch((err) => console.log(err));
