import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './api.js';   //the api page

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(4).fill(null),
    };
  }

  renderSquare(i) {
    return (
      <Square
        value="Sources"
        onClick={() => this.subMenu(i)}
      />
    );
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

class API extends React.Component {
  render() {
    return (
       <div>  
      <Menu />
        </div>

    );
  }
}

// ========================================

ReactDOM.render(
  <Menu />,
  document.getElementById('root')
);

