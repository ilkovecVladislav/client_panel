import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/client/add" component={AddClient} exact />
                <Route path="/client/edit/:id" component={EditClient} exact />
                <Route path="/client/:id" component={ClientDetails} exact />
                <Route path="/login" component={Login} exact />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
