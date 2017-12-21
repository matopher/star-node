const fetch = require('node-fetch');

fetch(`https://swapi.co/api/planets`)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.log(err);
  });