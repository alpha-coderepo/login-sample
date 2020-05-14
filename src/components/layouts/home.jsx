import React, { Component } from 'react';
import {Link,Route , Switch } from 'react-router';
import Routes from '../routes';
import '../../assets/css/sb-admin-2.css';
import Sidebar from '../common/sidebar';
import Header from '../common/header';
import Footer from '../common/footer';
import ModelCreation from '../views/model-creation';
import RelatedPartyAdjustments from '../views/related-party-adjustments';
import ScorecardDesigner from '../views/scorecard_designer';
import SupporterAdjustments from '../views/supporter-adjustments';
import { history } from '../../helpers';

class Home extends React.Component {
    constructor(props) {
        super(props);
        history.push('/home/ScorecardDesigner')
    }
    
    render() {
        return (
	  		<div className="sb-nav-fixed">
				<Header />
				<div id="layoutSidenav">
				    <Sidebar />
				    <div id="layoutSidenav_content">
				       	<div>
				       		<Switch>
				       			<Route path="/home/ScorecardDesigner/" component={ScorecardDesigner} />
				       			<Route path="/home/ModelCreation/" component={ModelCreation} />
				       			<Route path="/home/SupporterAdjustments/" component={SupporterAdjustments} />
				       			<Route path="/home/RelatedPartyAdjustments/" component={RelatedPartyAdjustments} />
				       		</Switch>
				       	</div>
				        <Footer />
				    </div>
				</div>
			</div>
		)
    }
}

export default Home;