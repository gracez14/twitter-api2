import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.css'
import registerServiceWorker from './registerServiceWorker'

class API extends Component {

  constructor(props) {
    super(props)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      
      this.state = {
        search_query: '',
        request_sent: false,
        result_obtained: false,
        results: '',
      }
  }

  handleChange(event) {
    this.setState({search_query: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let pipeline_id = '0fb27192-ba3f-4a91-b8c5-76ab122662f7'
    let search_query = this.state.search_query
    let api_endpoint = 'http://173.197.138.162:8080/v1/pipeline/' + pipeline_id

    this.setState({
      request_sent: true,
      result_obtained: false,
    })

    let xhr = new XMLHttpRequest()
    xhr.open("PUT", api_endpoint)
    xhr.onerror = () => {
    }
    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          this.setState({
            results: xhr.response,
            result_obtained: true,
          })
        }
      }
    }
    const body = [{'twitter_input': search_query}]
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(JSON.stringify(body))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tweet Search</h1>
        </header>
        <Break />
        <form className="main-form">
          <p className="App-intro">
            Search tweets<br />
            <input type="text" onChange={this.handleChange} />
            <input type="submit" onClick={this.handleSubmit} />
          </p>
        </form>
        <ShadowBreak />
        {this.state.result_obtained &&
          <div className="results-container">
            <Results results={this.state.results} query={this.state.search_query} />
            <ShadowBreak />
          </div>
        }
      </div>
    );
  }
}

class Results extends Component {

  json_response_to_jsx_results() {
    var results = []
    let parsed_results = JSON.parse(this.props.results)
    let results_json = parsed_results[0].twitter_result
    let num_results = results_json.length
    for (var i = 0; i < num_results; i++) {
      results.push(
        <div>
          <p className="result">{results_json[i]}</p>
          <Dash />
        </div>
      )
    }
    return results
  }

  render() {
    let results = this.json_response_to_jsx_results()
    return (
      <div className="results">
        <h1><i>Tweets about "{this.props.query}":</i></h1>        
        <Dash />
        {results}
        <div className="bottom">1/1</div>
      </div>
    )
  }
}

const Dash = () => (
    <div className="dash"></div>
)
const Break = () => (
    <div className="break"></div>
)
const ShadowBreak = () => (
    <div>
      <div className="shadow"></div>
      <div className="break"></div>
    </div>
)

export default API

