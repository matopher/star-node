const fetch = require('node-fetch');
const prompt = require('prompt');

prompt.start();

prompt.get(['query'], function (err, result) {
  fetch(`https://swapi.co/api/${result.query}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
});