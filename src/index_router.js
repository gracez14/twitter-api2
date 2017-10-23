import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './config.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
	
	
//config.exports = {
//  consumer_key: 'RuJpmlRpXja21rVk7LlA0qZ9f',
//  consumer_secret: 'vKz3e4VWAyiWfASi9aeENLXhH3jyuveff5Sev8eNFRr6hUlPef',
//  access_token_key: '2853794314-kKoq6f5t9E2kLRzFWwcrUB68dLwnelPPoM4NC0q',
//  access_token_secret: 'llO5nWx7QdO2XlUyeBUe6KPZeL5y9MqlZqTu5sRXvNZbZ'
//}
	

var Twitter = require('twitter');
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
	
const routes = [
  { path: '/twapi',
    exact: true,
    sidebar: () => <div></div>,
    main: () => <div>{tweetsResult}</div>
  },

]
const Sidebar = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
	  

        <div id="menu">
          <ul id = "nav">
            <li><a href="#" target="_self">Sources</a>
              <ul><li><Link to="./twapi">Twitter Search</Link></li></ul></li>
            <li><a href="#" target="_self">Pipeline</a></li>
            <li><a href="#" target="_self">Datasets</a></li>
            <li><a href="#" target="_self">Dashboards</a></li>
            
           </ul>
             </div>
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default Sidebar