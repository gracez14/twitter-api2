import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './config.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
	

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