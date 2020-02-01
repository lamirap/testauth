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
        response.json()
          .then((responseJson) => {
            this.setState({ apiResponse: this.state.apiResponse + '\n' + JSON.stringify(responseJson, null, 2) })
          });
      })
      .catch((error) => {
        console.error(error);
      })

    adalApiFetch(fetch, 'https://graph.microsoft.com/v1.0/groups/', {})
    .then((response) => {
      response.json()
        .then((responseJson) => {
          this.setState({ apiResponse: this.state.apiResponse + '\n' + JSON.stringify(responseJson, null, 2) })
        });
    })
    .catch((error) => {
      console.error(error);
    })

    adalApiFetch(fetch, 'https://graph.microsoft.com/v1.0/sites/root', {})
    .then((response) => {
      response.json()
        .then((responseJson) => {
          this.setState({ apiResponse: this.state.apiResponse + '\n' + JSON.stringify(responseJson, null, 2) })
        });
    })
    .catch((error) => {
      console.error(error);
    })

    adalApiFetch(fetch, 'https://graph.microsoft.com/v1.0/sites/tintl.sharepoint.com,0a18156c-e229-417d-bac0-1601ab933bdd,2972b475-7b48-4340-829b-65734b80d885/lists/770870c4-d8df-452c-9a59-3af04b4d99b3/items/64', {})
    .then((response) => {
      response.json()
        .then((responseJson) => {
          this.setState({ apiResponse: this.state.apiResponse + '\n' + JSON.stringify(responseJson, null, 2) })
        });
    })
    .catch((error) => {
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
