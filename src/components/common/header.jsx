import React, { Component } from 'react';
import Routes from '../routes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/maybank.png";
import { faPaw,faHome, faLaughWink, faTachometerAlt, 
		 faCog,faWrench,faFolder,faChartArea,faTable,
		 faSearch,faBell ,faFileAlt ,
		 faDonate,faExclamationTriangle ,faEnvelope,faUser,
		 faCogs,faList,faSignOutAlt,faDownload,faCalendar ,
		 faDollarSign,faClipboardList,faComments,
		 faEllipsisV,faCircle,faAngleUp,faBars,faColumns ,faAngleDown ,faBookOpen ,faAngleRight ,faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';

class Header extends React.Component {
    toggleNavBar() {
      $("body").toggleClass("sb-sidenav-toggled");
    }
    render() {
        return (
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark" style={{ backgroundColor:'#FFC83D' }}>
                    <a className="sidebar-brand d-flex align-items-center justify-content-center">
                        <div className="sidebar-brand-icon rotate-n-15">
                            {/*<FontAwesomeIcon icon={faPaw} size="fw" style={{ fontSize: '2rem',color:'black'}}/>*/}
                            <img style={{height: '50px'}} src={logo} alt="Logo" />
                        </div>
                        <div className="sidebar-brand-text mx-3 title-crrs">CRRS <sup></sup></div>
                    </a>
                    <button  className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle">
                        <FontAwesomeIcon onClick={this.toggleNavBar} icon = {faBars} />
                    </button>
                    <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-primary bg-dark" type="button">
                                    <FontAwesomeIcon icon = {faSearch} />
                                </button>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav ml-auto ml-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon={ faUser} />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a className="dropdown-item" >Settings</a><a className="dropdown-item">Activity Log</a>
                                <div className="dropdown-divider"></div>
                                <Link to='/login' className="dropdown-item">Logout</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;