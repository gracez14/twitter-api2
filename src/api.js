import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './config.js';

/*var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);  // retreive keys

// add parameters, change as needed
var params = {
  q: '#depaul',  //search for hello world
  count: 10,  //return 10 tweets
  result_type: 'recent', //return the most recent tweets
  lang: 'en'  // return english only
}

//GET from twitter API
var tweetsResult = T.get('search/tweets', params, function(err, tweets, response) {
    console.log(tweets);
  }
);
*/
var Twit = require('twit'); // this is how we import the twit package

var config = require('./config') //this is we import the config 

var T = new Twit(config); //this is the object of twit which will help us to call functions inside it
var params = {
q: 'a',
count: 10
} // this is the param variable


//GET from twitter API
var tweetsResult = T.stream('search/tweets', params, function(err, tweets, response) {
    console.log(tweets);
  }
);


// create a page
class API extends React.Component {
  render() {
	  const status = "Search recent tweets";   //title 
	  
	  return (
		<div><ul><li>{status}</li>  
		<li>{tweetsResult}</li></ul></div>  //return the GET result 
		
    );
  }
}
export default API