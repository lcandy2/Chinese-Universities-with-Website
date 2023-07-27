const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/DiamonWoo/Laosheng.top/master/fuwu/yuanxiao.md';

function make() {
  console.log("获取学校数据...")
  fetch(url)
    .then((content) => {
      console.log("获取学校数据成功：开始解析...")
      const jsonData = parse(content);
      write('chinese_universities_with_website.json', jsonData);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch the content. Status code: ${res.statusCode}`));
        return;
      }
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        resolve(rawData);
      });
    }).on('error', (error) => {
      reject(new Error(`Error while fetching the content: ${error.message}`));
    });
  });
}

function parse(data) {
  const $ = cheerio.load(data);
  const result = {};
  $('h3').each((index, element) => {
    const cityName = $(element).contents().filter(function () {
      return this.nodeType === 3; // Filter only text nodes
    }).text().trim();
    // Ignore h3 elements that don't have <small>
    if ($(element).find('small').length === 0) {
      return true; // Equivalent to 'continue' in each loop
    }
    const universities = {};
    $(element).nextUntil('h3', 'a').each((i, aElement) => {
      const universityName = $(aElement).text();
      let universityURL = $(aElement).attr('href');
      // Ignore links that start with "#"
      if (universityURL && universityURL.startsWith('#')) {
        return true; // Equivalent to 'continue' in each loop
      }
      // Process the URL to keep only the root domain
      if (universityURL) {
        const parsedURL = new URL(universityURL);
        universityURL = `${parsedURL.protocol}//${parsedURL.hostname}`;
      }
      universities[universityName] = universityURL;
    });
    result[cityName] = universities;
  });
  console.log("解析学校数据成功：准备写入文件...");
  return result;
}

function write(fileName, jsonData) {
  fs.writeFile(fileName, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`学校数据已成功写入 ${fileName}`);
    }
  });
}

make();