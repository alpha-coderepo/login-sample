import React from 'react';
import Routes from '../routes';
import { Link } from 'react-router-dom';
import '../../assets/scss/custom.scss';
import cover from "../../assets/img/cover.jpg";
import logo from "../../assets/img/logo.png";
import img_1 from '../../assets/img/login/loans/img1.jpg';
import img_2 from '../../assets/img/login/loans/img2.jpg';
import img_3 from '../../assets/img/login/loans/img3.jpg';
import img_4 from '../../assets/img/login/loans/img4.jpg';
import img_5 from '../../assets/img/login/loans/img5.jpg';
import img_6 from '../../assets/img/login/loans/img6.jpg';
import undraw_youtube_tutorial from '../../assets/img/svgtopng/undraw_youtube_tutorial.png';
import undraw_teaching from '../../assets/img/svgtopng/undraw_teaching.png';
import undraw_teacher from '../../assets/img/svgtopng/undraw_teacher.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration : 2000
});

import { userActions } from '../../actions';
import { connect } from 'react-redux';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    handleSubmit(e) {
      e.preventDefault();
      this.setState({ submitted: true });
      const { username, password } = this.state;
      if (username && password) {
          this.props.login(username, password);
      }
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
          <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
            <div className="site-wrap">
                <div className="site-mobile-menu site-navbar-target">
                  <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                      <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                  </div>
                  <div className="site-mobile-menu-body"></div>
                </div>
                <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                  <div className="container-fluid">
                    <div className="d-flex align-items-center">
                      <div className="site-logo mr-auto w-25"><img src={logo} alt="Logo" /></div>
                      <div className="mx-auto text-center">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                          <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                            <li><a href="" className="nav-link">Home</a></li>
                            <li><a href="" className="nav-link">Products</a></li>
                            <li><a href="" className="nav-link">Services</a></li>
                          </ul>
                        </nav>
                      </div>
                      <div className="ml-auto w-25">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                          <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                            <li className="cta"><a href="" className="nav-link"><span>Contact Us</span></a></li>
                          </ul>
                        </nav>
                        <a className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="intro-section" id="home-section">
                  <div className="slide-1" style={{backgroundImage: "url(" + cover + ")"}}>
                    <div className="container">
                      <div className="row">
                        <div className="col-12" style={{top:'200px'}}>
                          <div className="row align-items-center">
                            <div className="col-lg-6 mb-4">
                              <h1  data-aos="fade-up" data-aos-delay="100">KARISHMA</h1>
                              <p className="mb-4"  data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                              <p data-aos="fade-up" data-aos-delay="300"><a href="#" className="btn btn-primary py-3 px-5 btn-pill btn-maybank">Learn More</a></p>
                            </div>
                            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
                              <form action="" method="post" className="form-box" onSubmit={this.handleSubmit}>
                                <h3 className="h4 text-black mb-4">Sign In</h3>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                  {/*<input type="text" className="form-control" placeholder="Email Addresss" value={username} onChange={this.handleChange} />*/}
                                  <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                  {
                                    submitted && !username &&
                                    <div className="help-block">Username is required</div>
                                  }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                  {/*<input type="password" className="form-control" placeholder="Password" />*/}
                                  <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                  {
                                    submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                  }
                                </div>
                                <div className="form-group">
                                  <button className="btn btn-primary btn-pill btn-maybank">Sign In</button>
                                  {/*<input className="btn btn-primary btn-pill btn-maybank" value="Sign In" />*/}
                                  {
                                    loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                  }
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="site-section courses-title" id="courses-section">
                  <div className="container">
                    <div className="row mb-5 justify-content-center">
                      <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="">
                        <h2 className="section-title">Products</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <OwlCarousel className="owl-theme" loop margin={10} nav >
                  <div className="course bg-white h-100 align-self-stretch">
                    <figure className="m-0">
                      <a href="#"><img src={img_1} alt="Image" className="img-fluid" /></a>
                    </figure>
                    <div className="course-inner-text py-4 px-4">
                      <span className="course-price">MYR</span>
                      <div className="meta"><span className="icon-clock-o"></span>Investment Loans</div>
                      <h3><a href="#">Financing for purchase of shares quoted in Bursa Malaysia</a></h3>
                      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                    </div>
                    <div className="d-flex border-top stats">
                      <div className="py-3 px-4"><span className="icon-users"></span>Investment Loans</div>
                      <div className="py-3 px-4 w-25 ml-auto border-left"><span className="icon-chat"></span> 2</div>
                    </div>
                  </div>
                  <div className="course bg-white h-100 align-self-stretch">
                    <figure className="m-0">
                      <a href="#"><img src={img_2} alt="Image" className="img-fluid" /></a>
                    </figure>
                    <div className="course-inner-text py-4 px-4">
                      <span className="course-price">MYR</span>
                      <div className="meta"><span className="icon-clock-o"></span>Personal Loans</div>
                      <h3><a href="#">Get a shariah-compliant financing for ASB unit trust</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                       </p>
                    </div>
                    <div className="d-flex border-top stats">
                      <div className="py-3 px-4"><span className="icon-users"></span>Personal Loans</div>
                      <div className="py-3 px-4 w-25 ml-auto border-left"><span className="icon-chat"></span> 2</div>
                    </div>
                  </div>
                  <div className="course bg-white h-100 align-self-stretch">
                    <figure className="m-0">
                      <a href="#"><img src={img_3} alt="Image" className="img-fluid" /></a>
                    </figure>
                    <div className="course-inner-text py-4 px-4">
                      <span className="course-price">MYR</span>
                      <div className="meta"><span className="icon-clock-o"></span>Home Loans</div>
                      <h3><a href="#">Financing for purchase of shares quoted in Bursa Malaysia</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="d-flex border-top stats">
                      <div className="py-3 px-4"><span className="icon-users"></span>Home Loans</div>
                      <div className="py-3 px-4 w-25 ml-auto border-left"><span className="icon-chat"></span> 2</div>
                    </div>
                  </div>
                  <div className="course bg-white h-100 align-self-stretch">
                    <figure className="m-0">
                      <a href="#"><img src={img_4} alt="Image" className="img-fluid" /></a>
                    </figure>
                    <div className="course-inner-text py-4 px-4">
                      <span className="course-price">MYR</span>
                      <div className="meta"><span className="icon-clock-o"></span>Refinance</div>
                      <h3><a href="#">Financing for ASB unit trust</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="d-flex border-top stats">
                      <div className="py-3 px-4"><span className="icon-users"></span>Refinance</div>
                      <div className="py-3 px-4 w-25 ml-auto border-left"><span className="icon-chat"></span> 2</div>
                    </div>
                  </div>
                  <div className="course bg-white h-100 align-self-stretch">
                    <figure className="m-0">
                      <a href="#"><img src={img_6} alt="Image" className="img-fluid" /></a>
                    </figure>
                    <div className="course-inner-text py-4 px-4">
                      <span className="course-price">MYR</span>
                      <div className="meta"><span className="icon-clock-o"></span>Other Loans</div>
                      <h3><a href="#">Get a shariah-compliant financing for ASB unit trust</a></h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="d-flex border-top stats">
                      <div className="py-3 px-4"><span className="icon-users"></span>Other Loans</div>
                      <div className="py-3 px-4 w-25 ml-auto border-left"><span className="icon-chat"></span> 2</div>
                    </div>
                  </div>
                </OwlCarousel>
                <div className="site-section" id="programs-section">
                  <div className="container">
                    <div className="row mb-5 justify-content-center">
                      <div className="col-lg-7 text-center"  data-aos="fade-up" data-aos-delay="">
                        <h2 className="section-title">Our Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                      </div>
                    </div>
                    <div className="row mb-5 align-items-center">
                      <div className="col-lg-7 mb-5" data-aos="fade-up" data-aos-delay="100">
                        <img src={undraw_youtube_tutorial} alt="Image" className="img-fluid" />
                      </div>
                      <div className="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-black mb-4">Start investing today</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                        <div className="d-flex align-items-center custom-icon-wrap mb-3">
                          <span className="custom-icon-inner mr-3"><span className="icon icon-graduation-cap"></span></span>
                          <div><h3 className="m-0">Investment Loans</h3></div>
                        </div>
                        <div className="d-flex align-items-center custom-icon-wrap">
                          <span className="custom-icon-inner mr-3"><span className="icon icon-university"></span></span>
                          <div><h3 className="m-0">Home Loans</h3></div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-5 align-items-center">
                      <div className="col-lg-7 mb-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
                        <img src={undraw_teaching} alt="Image" className="img-fluid" />
                      </div>
                      <div className="col-lg-4 mr-auto order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-black mb-4">We Excell in providing Support</h2>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                        <div className="d-flex align-items-center custom-icon-wrap mb-3">
                          <span className="custom-icon-inner mr-3"><span className="icon icon-graduation-cap"></span></span>
                          <div><h3 className="m-0">amet consectetur</h3></div>
                        </div>
                        <div className="d-flex align-items-center custom-icon-wrap">
                          <span className="custom-icon-inner mr-3"><span className="icon icon-university"></span></span>
                          <div><h3 className="m-0">amet consectetur</h3></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="footer-section bg-ash">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <h3>About Karisma</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
                      </div>
                      <div className="col-md-3 ml-auto">
                        <h3>Links</h3>
                        <ul className="list-unstyled footer-links">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Products</a></li>
                          <li><a href="#">Services</a></li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                      </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                      <div className="col-md-12">
                        <div className="border-top pt-5">
                          <p>
                            Copyright All rights reserved | This template is made with  by
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
            </div>
          </div>
        );
    }
}
function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapState, actionCreators) (Login);