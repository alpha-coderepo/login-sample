import React, { Component } from 'react';
import Routes from '../routes';
import { Link } from 'react-router-dom';
import { faHome, faLaughWink, faTachometerAlt, 
		 faCog,faWrench,faFolder,faChartArea,faTable,
		 faSearch,faBell ,faFileAlt ,
		 faDonate,faExclamationTriangle ,faEnvelope,faUser,
		 faCogs,faList,faSignOutAlt,faDownload,faCalendar ,
		 faDollarSign,faClipboardList,faComments,
		 faEllipsisV,faCircle,faAngleUp,faBars,faColumns ,faAngleDown ,faBookOpen ,faAngleRight ,faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { history } from '../../helpers';
import $ from 'jquery';
class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="layoutSidenav_nav">
               <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">
                                Core
                            </div>
                            <Link className="nav-link" to='/home/ScorecardDesigner'>
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon={ faTachometerAlt} />
                                </div>
                                Scorecard Designer
                            </Link >
                            <div className="sb-sidenav-menu-heading">
                                Interface
                            </div>
                            <Link className="nav-link collapsed" to='/home/ModelCreation'>
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon={ faColumns} />
                                </div>
                                Model Creation
                                <div className="sb-sidenav-collapse-arrow">
                                    <FontAwesomeIcon icon={ faAngleDown} />
                                </div>
                            </Link >
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link">Policy Adjustments</a>
                                    <a className="nav-link">Light Sidenav</a>
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to='/home/SupporterAdjustments'>
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon={ faBookOpen} />
                                </div>
                                Supporter Adjustments
                                <div className="sb-sidenav-collapse-arrow">
                                    <FontAwesomeIcon icon={ faAngleDown} />
                                </div>
                            </Link >
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow">
                                            <FontAwesomeIcon icon={ faAngleDown} />
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link">Login</a>
                                            <a className="nav-link">Register</a>
                                            <a className="nav-link">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow">
                                            <FontAwesomeIcon icon={ faAngleDown} />
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link">401 Page</a>
                                            <a className="nav-link">404 Page</a>
                                            <a className="nav-link">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">
                                Addons
                            </div>
                            <Link className="nav-link" to='/home/RelatedPartyAdjustments'>
                                <div className="sb-nav-link-icon">
                                    <FontAwesomeIcon icon={ faChartArea} />
                                </div>
                                Related Party Adjustments
                            </Link >
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">
                            Logged in as:
                        </div>
                        Manohar
                    </div>
                </nav>
            </div>
        )
    }
}

export default Sidebar;