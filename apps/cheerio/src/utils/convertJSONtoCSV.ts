import { json2csv } from 'json-2-csv';
import fs from 'fs';

export function convertJsonToCsv(json: Array<object>): string {
  const csv = json2csv(json);
  return csv;
}

export function saveCsvToFile(csvContent: string, fileName: string) {
  fs.writeFile(fileName, csvContent, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`CSV file saved successfully under ${fileName}!`);
    }
  });
}
