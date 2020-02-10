const url = require('url');
const URL = url.URL;

const lngUrl = new URL('https://linagora.com/vision');
console.log(lngUrl.hostname);
console.log(lngUrl.pathname);