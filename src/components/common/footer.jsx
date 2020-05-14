import React, { Component } from 'react';
import Routes from '../routes';
import { faPaw,faHome, faLaughWink, faTachometerAlt, 
		 faCog,faWrench,faFolder,faChartArea,faTable,
		 faSearch,faBell ,faFileAlt ,
		 faDonate,faExclamationTriangle ,faEnvelope,faUser,
		 faCogs,faList,faSignOutAlt,faDownload,faCalendar ,
		 faDollarSign,faClipboardList,faComments,
		 faEllipsisV,faCircle,faAngleUp,faBars,faColumns ,faAngleDown ,faBookOpen ,faAngleRight ,faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () =>
	<div>
		<footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Your Website 2019</div>
                    <div>
                        <a >Privacy Policy</a>
                        &middot;
                        <a >Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
	</div>;

export default Footer;