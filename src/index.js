import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import API from './api.js';   //the api page


const routes = [
  { path: '/',
    sidebar: () => <div>Source</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/api',
    exact: true,
    sidebar: () => <div></div>,
    main: () => <API />,
  }
]


class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(4).fill(null),
    };
  }

  render() {
    const status = 'Twitter API Menu';
          
    return (
        <div id="menu">
          <ul id = "nav">
            <li><a href="#" target="_self">Sources</a>
              <ul><li><Link to="/api">Twitter Search</Link></li></ul></li>
            <li><a href="#" target="_self">Pipeline</a></li>
            <li><a href="#" target="_self">Datasets</a></li>
            <li><a href="#" target="_self">Dashboards</a></li>
          </ul>
        </div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<Router>
      	<div>
          <Menu />

          <hr/>

          <Switch>
            <Route path="/api" component={API} />
          </Switch>
        </div>
      </Router>
    )
  }
}


// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
