fetch('https://my-brand-api-v2.herokuapp.com/api/articles')
  .then(response => response.json())
  .then(data => console.log(data));