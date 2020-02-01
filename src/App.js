import React, { Component } from 'react';
import { adalApiFetch, authContext, getToken } from './adalConfig';
import './App.css';


class App extends Component {

  state = {
    apiResponse: ''
  };

  componentDidMount() {

    console.log(authContext.getCachedUser());
    console.log(authContext);
    console.log(getToken());
    // We're using Fetch as the method to be called, and the /me endpoint 
    // from Microsoft Graph as the REST API request to make.
    adalApiFetch(fetch, 'https://graph.microsoft.com/v1.0/me', {})
      .then((response) => {

        // This is where you deal with your API response. In this case, we            
        // interpret the response as JSON, and then call `setState` with the
        // pretty-printed JSON-stringified object.
        response.json()
          .then((responseJson) => {
            this.setState({ apiResponse: JSON.stringify(responseJson, null, 2) })
          });
      })
      .catch((error) => {

        // Don't forget to handle errors!
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <p>API response:</p>
        <pre>{ this.state.apiResponse }</pre>
      </div>
    );
  }
}

export default App;
