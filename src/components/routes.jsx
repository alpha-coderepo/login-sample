import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import Home from './layouts/home';
import Login from './views/login';


//TODO Adding Private route and authorization is pending
class Routes extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            // clear alert on location change
            //this.props.clearAlerts();
        });
    }
    render() {
        return (
		  <main>
			<Router history={history}>
			    <Switch>
			      <Route exact path='/' component={Login}/>
			      <Route path='/login' component={Login}/>
			      <Route path='/home' component={Home}/>
			    </Switch>
			</Router>
		  </main>
		)
    }
}

export default Routes;