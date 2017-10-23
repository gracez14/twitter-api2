import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './api.js';   //the api page


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
      <div>
        <div className="status">{status}</div>
        <div id="menu">
          <ul id = "nav">
            <li><a href="#" target="_self">Sources</a>
              <ul><li><a href="./api.js">Twitter Search</a></li></ul></li>
            <li><a href="#" target="_self">Pipeline</a></li>
            <li><a href="#" target="_self">Datasets</a></li>
            <li><a href="#" target="_self">Dashboards</a></li>
            
           </ul>
             </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Menu />,
  document.getElementById('root')
);

