import React from "react"
import { IScriptSnapshot } from "typescript"
import { CheckLogin } from "../../../App"
import IsLogin from "../../profile/IsLogin"
import Category from "../Category"
function Header() {
  return (
    <div>
      <header className="primary">
        <div className="firstbar">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="brand">
                  <a href="index.html">
                    <img src="images/logo.png" alt="Magz Logo"/>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <form className="search" autoComplete="off">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="Type something here"/>
                        <div className="input-group-btn">
                          <button className="btn btn-primary"><i className="ion-search"></i></button>
                        </div>
                    </div>
                  </div>
                  <div className="help-block">
                    <div>Popular:</div>
                    <ul>
                      <li><a href="#">HTML5</a></li>
                      <li><a href="#">CSS3</a></li>
                      <li><a href="#">Bootstrap 3</a></li>
                      <li><a href="#">jQuery</a></li>
                      <li><a href="#">AnguarJS</a></li>
                    </ul>
                  </div>
                </form>
              </div>
              <CheckLogin.Provider value={{ isLogin: true }}>
                <IsLogin/>
              </CheckLogin.Provider>
            </div>
          </div>
        </div>

        <nav className="menu">
          <div className="container">
            <div className="brand">
              <a href="#">
                <img src="images/logo.png" alt="Magz Logo"/>
              </a>
            </div>
            <div className="mobile-toggle">
              <a href="#" data-toggle="menu" data-target="#menu-list"><i className="ion-navicon-round"></i></a>
            </div>
            <div className="mobile-toggle">
              <a href="#" data-toggle="sidebar" data-target="#sidebar"><i className="ion-ios-arrow-left"></i></a>
            </div>
            <div id="menu-list">
              <ul className="nav-list">
                <li className="for-tablet nav-title"><a>Menu</a></li>
                <li className="for-tablet"><a href="login.html">Login</a></li>
                <li className="for-tablet"><a href="register.html">Register</a></li>
                <li><a href="category.html">Standard</a></li>
                <li className="dropdown magz-dropdown">
                  <a href="category.html">Pages <i className="ion-ios-arrow-right"></i></a>
                  <ul className="dropdown-menu">
                    <li><a href="index.html">Home</a></li>
                    <li className="dropdown magz-dropdown">
                      <a href="#">Authentication <i className="ion-ios-arrow-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="forgot.html">Forgot Password</a></li>
                        <li><a href="reset.html">Reset Password</a></li>
                      </ul>
                    </li>
                    <li><a href="category.html">Category</a></li>
                    <li><a href="single.html">Single</a></li>
                    <li><a href="page.html">Page</a></li>
                    <li><a href="search.html">Search</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li className="dropdown magz-dropdown">
                      <a href="#">Error <i className="ion-ios-arrow-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="403.html">403</a></li>
                        <li><a href="404.html">404</a></li>
                        <li><a href="500.html">500</a></li>
                        <li><a href="503.html">503</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown magz-dropdown"><a href="#">Dropdown <i className="ion-ios-arrow-right"></i></a>
                  <ul className="dropdown-menu">
                    <li><a href="category.html">Internet</a></li>
                    <li className="dropdown magz-dropdown"><a href="category.html">Troubleshoot <i className="ion-ios-arrow-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="category.html">Software</a></li>
                        <li className="dropdown magz-dropdown"><a href="category.html">Hardware <i className="ion-ios-arrow-right"></i></a>
                          <ul className="dropdown-menu">
                            <li><a href="category.html">Main Board</a></li>
                            <li><a href="category.html">RAM</a></li>
                            <li><a href="category.html">Power Supply</a></li>
                          </ul>
                        </li>
                        <li><a href="category.html">Brainware</a></li>
                      </ul>
                    </li>
                    <li><a href="category.html">Office</a></li>
                    <li className="dropdown magz-dropdown"><a href="#">Programming <i className="ion-ios-arrow-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="category.html">Web</a></li>
                        <li className="dropdown magz-dropdown"><a href="category.html">Mobile <i className="ion-ios-arrow-right"></i></a>
                          <ul className="dropdown-menu">
                            <li className="dropdown magz-dropdown"><a href="category.html">Hybrid <i className="ion-ios-arrow-right"></i></a>
                              <ul className="dropdown-menu">
                                <li><a href="#">Ionic Framework 1</a></li>
                                <li><a href="#">Ionic Framework 2</a></li>
                                <li><a href="#">Ionic Framework 3</a></li>
                                <li><a href="#">Framework 7</a></li>
                              </ul>
                            </li>
                            <li><a href="category.html">Native</a></li>
                          </ul>
                        </li>
                        <li><a href="category.html">Desktop</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown magz-dropdown magz-dropdown-megamenu"><a href="#">Mega Menu <i className="ion-ios-arrow-right"></i> <div className="badge">Hot</div></a>
                  <div className="dropdown-menu megamenu">
                    <div className="megamenu-inner">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="megamenu-title">Trending</h2>
                            </div>
                          </div>
                          <ul className="vertical-menu">
                            <li><a href="#"><i className="ion-ios-circle-outline"></i> Mega menu is a new feature</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline"></i> This is an example</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline"></i> For a submenu item</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline"></i> You can add</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline"></i> Your own items</a></li>
                          </ul>
                        </div>
                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="megamenu-title">Featured Posts</h2>
                            </div>
                          </div>
                          <div className="row">
                            <article className="article col-md-4 mini">
                              <div className="inner">
                                <figure>
                                  <a href="single.html">
                                    <img src="images/news/img10.jpg" alt="Sample Article"/>
                                  </a>
                                </figure>
                                <div className="padding">
                                  <div className="detail">
                                    <div className="time">December 10, 2016</div>
                                    <div className="category"><a href="category.html">Healthy</a></div>
                                  </div>
                                  <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                </div>
                              </div>
                            </article>
                            <article className="article col-md-4 mini">
                              <div className="inner">
                                <figure>
                                  <a href="single.html">
                                    <img src="images/news/img11.jpg" alt="Sample Article"/>
                                  </a>
                                </figure>
                                <div className="padding">
                                  <div className="detail">
                                    <div className="time">December 13, 2016</div>
                                    <div className="category"><a href="category.html">Lifestyle</a></div>
                                  </div>
                                  <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                </div>
                              </div>
                            </article>
                            <article className="article col-md-4 mini">
                              <div className="inner">
                                <figure>
                                  <a href="single.html">
                                    <img src="images/news/img14.jpg" alt="Sample Article"/>
                                  </a>
                                </figure>
                                <div className="padding">
                                  <div className="detail">
                                    <div className="time">December 14, 2016</div>
                                    <div className="category"><a href="category.html">Travel</a></div>
                                  </div>
                                  <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown magz-dropdown magz-dropdown-megamenu"><a href="#">Column <i className="ion-ios-arrow-right"></i></a>
                  <Category/>
                </li>
                <li className="dropdown magz-dropdown"><a href="#">Dropdown Icons <i className="ion-ios-arrow-right"></i></a>
                  <ul className="dropdown-menu">
                    <li><a href="#"><i className="icon ion-person"></i> My Account</a></li>
                    <li><a href="#"><i className="icon ion-heart"></i> Favorite</a></li>
                    <li><a href="#"><i className="icon ion-chatbox"></i> Comments</a></li>
                    <li><a href="#"><i className="icon ion-key"></i> Change Password</a></li>
                    <li><a href="#"><i className="icon ion-settings"></i> Settings</a></li>
                    <li className="divider"></li>
                    <li><a href="#"><i className="icon ion-log-out"></i> Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
export default Header