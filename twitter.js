
var client = new Twitter({
consumer_key: 'RuJpmlRpXja21rVk7LlA0qZ9f',
consumer_secret :'vKz3e4VWAyiWfASi9aeENLXhH3jyuveff5Sev8eNFRr6hUlPef',
OAUTH_TOKEN : '2853794314-kKoq6f5t9E2kLRzFWwcrUB68dLwnelPPoM4NC0q',
OAUTH_TOKEN_SECRET : 'llO5nWx7QdO2XlUyeBUe6KPZeL5y9MqlZqTu5sRXvNZbZ'
});

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  oauth_token: process.env.TWITTER_OAUTH_TOKEN,
  oauth_token_secret: process.env.TWITTER_OAUTH_TOKEN_SECRET
});


//client.get(path, params, callback);
//client.post(path, params, callback);
//client.stream(path, params, callback);


client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
});