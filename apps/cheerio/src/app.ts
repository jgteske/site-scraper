import 'dotenv/config';
import { cheerioScrapeSite } from './utils/cheerioScrapeSite';

const url = process.env.URL;

if (!url) {
  throw new Error('No url defined! Aborting...');
} else {
  console.log('URL: ', url);
}

cheerioScrapeSite(url)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
