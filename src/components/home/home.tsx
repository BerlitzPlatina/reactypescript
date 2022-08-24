import Title from "../kit/title"
import request from "../../requests/request";
import Article from "../articles/article";
import { useEffect, useState } from "react";
import {Article as IArticle} from "../articles/type"
import {Paginate} from "../types/type"
import Header from "../layout/default/header";
function getArticles() {
  return request(`/articles`, {
    method: "GET",
  });
}
const Home: React.FC<{}> = () => {
  const [articles, setArticles] = useState<Paginate<IArticle>>();
  useEffect((): any => {
    let mounted = true;
    getArticles().then(res => {
        if(mounted) {
          setArticles(res.data.articleNextLastestNews)
        }
      })
    return () => mounted = false;
  }, [])
  return (
    <div className="skin-orange">
      <Title nameTitle={"Home"} />
      <Header/>
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="headline">
                <div className="nav" id="headline-nav">
                  <a className="left carousel-control" role="button" data-slide="prev">
                    <span className="ion-ios-arrow-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" role="button" data-slide="next">
                    <span className="ion-ios-arrow-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <div className="owl-carousel owl-theme" id="headline">
                  <div className="item">
                    <a href="#"><div className="badge">Tip!</div> Vestibulum ante ipsum primis in faucibus orci</a>
                  </div>
                  <div className="item">
                    <a href="#">Ut rutrum sodales mauris ut suscipit</a>
                  </div>
                </div>
              </div>
              <div className="owl-carousel owl-theme slide" id="featured">
                <div className="item">
                  <article className="featured">
                    <div className="overlay"></div>
                    <figure>
                      <img src="images/news/img04.jpg" alt="Sample Article"/>
                    </figure>
                    <div className="details">
                      <div className="category"><a href="category.html">Computer</a></div>
                      <h1><a href="single.html">Phasellus iaculis quam sed est elementum vel ornare ligula venenatis</a></h1>
                      <div className="time">December 26, 2016</div>
                    </div>
                  </article>
                </div>
                <div className="item">
                  <article className="featured">
                    <div className="overlay"></div>
                    <figure>
                      <img src="images/news/img14.jpg" alt="Sample Article"/>
                    </figure>
                    <div className="details">
                      <div className="category"><a href="category.html">Travel</a></div>
                      <h1><a href="single.html">Class aptent taciti sociosqu ad litora torquent per conubia nostra</a></h1>
                      <div className="time">December 10, 2016</div>
                    </div>
                  </article>
                </div>
                <div className="item">
                  <article className="featured">
                    <div className="overlay"></div>
                    <figure>
                      <img src="images/news/img13.jpg" alt="Sample Article"/>
                    </figure>
                    <div className="details">
                      <div className="category"><a href="category.html">International</a></div>
                      <h1><a href="single.html">Maecenas accumsan tortor ut velit pharetra mollis</a></h1>
                      <div className="time">October 12, 2016</div>
                    </div>
                  </article>
                </div>
                <div className="item">
                  <article className="featured">
                    <div className="overlay"></div>
                    <figure>
                      <img src="images/news/img05.jpg" alt="Sample Article"/>
                    </figure>
                    <div className="details">
                      <div className="category"><a href="category.html">Lifestyle</a></div>
                      <h1><a href="single.html">Mauris elementum libero at pharetra auctor Fusce ullamcorper elit</a></h1>
                      <div className="time">November 27, 2016</div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="line">
                <div>Latest News</div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="row">
                    <article className="article col-md-12">
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
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                          <footer>
                            <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>1263</div></a>
                            <a className="btn btn-primary more" href="single.html">
                              <div>More</div>
                              <div><i className="ion-ios-arrow-thin-right"></i></div>
                            </a>
                          </footer>
                        </div>
                      </div>
                    </article>
                    <article className="article col-md-12">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img06.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <div className="detail">
                            <div className="time">December 22, 2016</div>
                            <div className="category"><a href="category.html">Healthy</a></div>
                          </div>
                          <h2><a href="single.html">Exercitation ullamco laboris nisi ut aliquip</a></h2>
                          <p>Maecenas accumsan tortor ut velit pharetra mollis. Proin eu nisl et arcu iaculis placerat sollicitudin ut est. In fringilla dui dui.</p>
                          <footer>
                            <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>327</div></a>
                            <a className="btn btn-primary more" href="single.html">
                              <div>More</div>
                              <div><i className="ion-ios-arrow-thin-right"></i></div>
                            </a>
                          </footer>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="row">
                    <article className="article col-md-12">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img05.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <div className="detail">
                            <div className="time">December 09, 2016</div>
                            <div className="category"><a href="category.html">Lifestyle</a></div>
                          </div>
                          <h2><a href="single.html">Mauris elementum libero at pharetra auctor</a></h2>
                          <p>Vivamus in efficitur mi. Nullam semper justo ut elit lacinia lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                          <footer>
                            <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>1083</div></a>
                            <a className="btn btn-primary more" href="single.html">
                              <div>More</div>
                              <div><i className="ion-ios-arrow-thin-right"></i></div>
                            </a>
                          </footer>
                        </div>
                      </div>
                    </article>
                    <article className="article col-md-12">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img07.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <div className="detail">
                            <div className="time">December 21, 2016</div>
                            <div className="category"><a href="category.html">Sport</a></div>
                          </div>
                          <h2><a href="single.html">Sed do eiusmod tempor incididunt ut labore</a></h2>
                          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris elementum libero at pharetra auctor.</p>
                          <footer>
                            <a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>980</div></a>
                            <a className="btn btn-primary more" href="single.html">
                              <div>More</div>
                              <div><i className="ion-ios-arrow-thin-right"></i></div>
                            </a>
                          </footer>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="banner">
                <a href="#">
                  <img src="images/ads.png" alt="Sample Article"/>
                </a>
              </div>
              <div className="line transparent little"></div>
              <div className="row">
                <div className="col-md-6 col-sm-6 trending-tags">
                  <h1 className="title-col">Trending Tags</h1>
                  <div className="body-col">
                    <ol className="tags-list">
                      <li><a href="#">HTML5</a></li>
                      <li><a href="#">CSS3</a></li>
                      <li><a href="#">JavaScript</a></li>
                      <li><a href="#">jQuery</a></li>
                      <li><a href="#">Bootstrap</a></li>
                      <li><a href="#">Responsive</a></li>
                      <li><a href="#">AuteIrure</a></li>
                      <li><a href="#">Voluptate</a></li>
                      <li><a href="#">Veit</a></li>
                      <li><a href="#">Reprehenderit</a></li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <h1 className="title-col">
                    Hot News
                    <div className="carousel-nav" id="hot-news-nav">
                      <div className="prev">
                        <i className="ion-ios-arrow-left"></i>
                      </div>
                      <div className="next">
                        <i className="ion-ios-arrow-right"></i>
                      </div>
                    </div>
                  </h1>
                  <div className="body-col vertical-slider" data-max="4" data-nav="#hot-news-nav" data-item="article">
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img09.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Lifestyle</a></div>
                            <div className="time">December 22, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img01.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Lifestyle</a></div>
                            <div className="time">December 22, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img05.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Lifestyle</a></div>
                            <div className="time">December 22, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img02.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Travel</a></div>
                            <div className="time">December 21, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img13.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">International</a></div>
                            <div className="time">December 20, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img08.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Aliquam et metus convallis tincidunt velit ut rhoncus dolor</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Computer</a></div>
                            <div className="time">December 19, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="line top">
                <div>Just Another News</div>
              </div>
              <div className="row">
                {articles?.data.map((article, index) => {
                  return <Article
                    key={index}
                    article={article}
                  />
                })}
              </div>
            </div>
            <div className="col-xs-6 col-md-4 sidebar" id="sidebar">
              <div className="sidebar-title for-tablet">Sidebar</div>
              <aside>
                <div className="aside-body">
                  <div className="featured-author">
                    <div className="featured-author-inner">
                      <div className="featured-author-cover">
                        <div className="badges">
                          <div className="badge-item"><i className="ion-star"></i> Featured</div>
                        </div>
                        <div className="featured-author-center">
                          <figure className="featured-author-picture">
                            <img src="images/img01.jpg" alt="Sample Article"/>
                          </figure>
                          <div className="featured-author-info">
                            <h2 className="name">John Doe</h2>
                            <div className="desc">@JohnDoe</div>
                          </div>
                        </div>
                      </div>
                      <div className="featured-author-body">
                        <div className="featured-author-count">
                          <div className="item">
                            <a href="#">
                              <div className="name">Posts</div>
                              <div className="value">208</div>
                            </a>
                          </div>
                          <div className="item">
                            <a href="#">
                              <div className="name">Stars</div>
                              <div className="value">3,729</div>
                            </a>
                          </div>
                          <div className="item">
                            <a href="#">
                              <div className="icon">
                                <div>More</div>
                                <i className="ion-chevron-right"></i>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="featured-author-quote">
                          "Eur costrict mobsa undivani krusvuw blos andugus pu aklosah"
                        </div>
                        <div className="block">
                          <h2 className="block-title">Photos</h2>
                          <div className="block-body">
                            <ul className="item-list-round" data-magnific="gallery">
                              {/* <li><a href="images/news/img06.jpg" style="background-image: url('images/news/img06.jpg');"></a></li>
                              <li><a href="images/news/img07.jpg" style="background-image: url('images/news/img07.jpg');"></a></li>
                              <li><a href="images/news/img08.jpg" style="background-image: url('images/news/img08.jpg');"></a></li>
                              <li><a href="images/news/img09.jpg" style="background-image: url('images/news/img09.jpg');"></a></li>
                              <li><a href="images/news/img10.jpg" style="background-image: url('images/news/img10.jpg');"></a></li>
                              <li><a href="images/news/img11.jpg" style="background-image: url('images/news/img11.jpg');"></a></li>
                              <li><a href="images/news/img12.jpg" style="background-image: url('images/news/img12.jpg');"><div className="more">+2</div></a></li>
                              <li className="hidden"><a href="images/news/img13.jpg" style="background-image: url('images/news/img13.jpg');"></a></li>
                              <li className="hidden"><a href="images/news/img14.jpg" style="background-image: url('images/news/img14.jpg');"></a></li> */}
                            </ul>
                          </div>
                        </div>
                        <div className="featured-author-footer">
                          <a href="#">See All Authors</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <aside>
                <h1 className="aside-title">Popular <a href="#" className="all">See All <i className="ion-ios-arrow-right"></i></a></h1>
                <div className="aside-body">
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img07.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img14.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img09.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">Aliquam et metus convallis tincidunt velit ut rhoncus dolor</a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img11.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">dui augue facilisis lacus fringilla pulvinar massa felis quis velit</a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img06.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">neque est semper nulla, ac elementum risus quam a enim</a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img03.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">Morbi vitae nisl ac mi luctus aliquet a vitae libero</a></h1>
                      </div>
                    </div>
                  </article>
                </div>
              </aside>
              <aside>
                <div className="aside-body">
                  <form className="newsletter">
                    <div className="icon">
                      <i className="ion-ios-email-outline"></i>
                      <h1>Newsletter</h1>
                    </div>
                    <div className="input-group">
                      <input type="email" className="form-control email" placeholder="Your mail"/>
                        <div className="input-group-btn">
                          <button className="btn btn-primary"><i className="ion-paper-airplane"></i></button>
                        </div>
                    </div>
                    <p>By subscribing you will receive new articles in your email.</p>
                  </form>
                </div>
              </aside>
              <aside>
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li className="active">
                    <a href="#recomended" aria-controls="recomended" role="tab" data-toggle="tab">
                      <i className="ion-android-star-outline"></i> Recomended
                    </a>
                  </li>
                  <li>
                    <a href="#comments" aria-controls="comments" role="tab" data-toggle="tab">
                      <i className="ion-ios-chatboxes-outline"></i> Comments
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="recomended">
                    <article className="article-fw">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img16.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="details">
                          <div className="detail">
                            <div className="time">December 31, 2016</div>
                            <div className="category"><a href="category.html">Sport</a></div>
                          </div>
                          <h1><a href="single.html">Donec congue turpis vitae mauris</a></h1>
                          <p>
                            Donec congue turpis vitae mauris condimentum luctus. Ut dictum neque at egestas convallis.
                          </p>
                        </div>
                      </div>
                    </article>
                    <div className="line"></div>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img05.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Lifestyle</a></div>
                            <div className="time">December 22, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img02.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Fusce ullamcorper elit at felis cursus suscipit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Travel</a></div>
                            <div className="time">December 21, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="article-mini">
                      <div className="inner">
                        <figure>
                          <a href="single.html">
                            <img src="images/news/img10.jpg" alt="Sample Article"/>
                          </a>
                        </figure>
                        <div className="padding">
                          <h1><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate velit</a></h1>
                          <div className="detail">
                            <div className="category"><a href="category.html">Healthy</a></div>
                            <div className="time">December 20, 2016</div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="tab-pane comments" id="comments">
                    <div className="comment-list sm">
                      <div className="item">
                        <div className="user">
                          <figure>
                            <img src="images/img01.jpg" alt="User Picture"/>
                          </figure>
                          <div className="details">
                            <h5 className="name">Mark Otto</h5>
                            <div className="time">24 Hours</div>
                            <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="user">
                          <figure>
                            <img src="images/img01.jpg" alt="User Picture"/>
                          </figure>
                          <div className="details">
                            <h5 className="name">Mark Otto</h5>
                            <div className="time">24 Hours</div>
                            <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="user">
                          <figure>
                            <img src="images/img01.jpg" alt="User Picture"/>
                          </figure>
                          <div className="details">
                            <h5 className="name">Mark Otto</h5>
                            <div className="time">24 Hours</div>
                            <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <aside>
                <h1 className="aside-title">Videos
                  <div className="carousel-nav" id="video-list-nav">
                    <div className="prev"><i className="ion-ios-arrow-left"></i></div>
                    <div className="next"><i className="ion-ios-arrow-right"></i></div>
                  </div>
                </h1>
                <div className="aside-body">
                  <ul className="video-list" data-youtube='"carousel":true, "nav": "#video-list-nav"'>
                    <li><a data-youtube-id="SBjQ9tuuTJQ" data-action="magnific"></a></li>
                    <li><a data-youtube-id="9cVJr3eQfXc" data-action="magnific"></a></li>
                    <li><a data-youtube-id="DnGdoEa1tPg" data-action="magnific"></a></li>
                  </ul>
                </div>
              </aside>
              <aside id="sponsored">
                <h1 className="aside-title">Sponsored</h1>
                <div className="aside-body">
                  <ul className="sponsored">
                    <li>
                      <a href="#">
                        <img src="images/sponsored.png" alt="Sponsored"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/sponsored.png" alt="Sponsored"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/sponsored.png" alt="Sponsored"/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/sponsored.png" alt="Sponsored"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="best-of-the-week">
        <div className="container">
          <h1><div className="text">Best Of The Week</div>
            <div className="carousel-nav" id="best-of-the-week-nav">
              <div className="prev">
                <i className="ion-ios-arrow-left"></i>
              </div>
              <div className="next">
                <i className="ion-ios-arrow-right"></i>
              </div>
            </div>
          </h1>
          <div className="owl-carousel owl-theme carousel-1">
            <article className="article">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="images/news/img03.jpg" alt="Sample Article"/>
                  </a>
                </figure>
                <div className="padding">
                  <div className="detail">
                    <div className="time">December 11, 2016</div>
                    <div className="category"><a href="category.html">Travel</a></div>
                  </div>
                  <h2><a href="single.html">tempor interdum Praesent tincidunt</a></h2>
                  <p>Praesent tincidunt, leo vitae congue molestie.</p>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="images/news/img16.jpg" alt="Sample Article"/>
                  </a>
                </figure>
                <div className="padding">
                  <div className="detail">
                    <div className="time">December 09, 2016</div>
                    <div className="category"><a href="category.html">Sport</a></div>
                  </div>
                  <h2><a href="single.html">Maecenas porttitor sit amet turpis a semper</a></h2>
                  <p> Proin vulputate, urna id porttitor luctus, dui augue facilisis lacus.</p>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="images/news/img15.jpg" alt="Sample Article"/>
                  </a>
                </figure>
                <div className="padding">
                  <div className="detail">
                    <div className="time">December 26, 2016</div>
                    <div className="category"><a href="category.html">Lifestyle</a></div>
                  </div>
                  <h2><a href="single.html">Fusce ac odio eu ex volutpat pellentesque</a></h2>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus</p>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="images/news/img14.jpg" alt="Sample Article"/>
                  </a>
                </figure>
                <div className="padding">
                  <div className="detail">
                    <div className="time">December 26, 2016</div>
                    <div className="category"><a href="category.html">Travel</a></div>
                  </div>
                  <h2><a href="single.html">Nulla facilisis odio quis gravida vestibulum</a></h2>
                  <p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="images/news/img01.jpg" alt="Sample Article"/>
                  </a>
                </figure>
                <div className="padding">
                  <div className="detail">
                    <div className="time">December 26, 2016</div>
                    <div className="category"><a href="category.html">Travel</a></div>
                  </div>
                  <h2><a href="single.html">Fusce Ullamcorper Elit At Felis Cursus Suscipit</a></h2>
                  <p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
                </div>
              </div>
            </article>
            <article className="article">
              <div className="inner">
                <figure>
                  <a href="single.html">
                    <img src="images/news/img11.jpg" alt="Sample Article"/>
                  </a>
                </figure>
                <div className="padding">
                  <div className="detail">
                    <div className="time">December 26, 2016</div>
                    <div className="category"><a href="category.html">Travel</a></div>
                  </div>
                  <h2><a href="single.html">Donec consequat arcu at ultrices sodales</a></h2>
                  <p>Proin venenatis pellentesque arcu, ut mattis nulla placerat et.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="block">
                <h1 className="block-title">Company Info</h1>
                <div className="block-body">
                  <figure className="foot-logo">
                    <img src="images/logo-light.png" className="img-responsive" alt="Logo"/>
                  </figure>
                  <p className="brand-description">
                    Magz is a HTML5 &amp; CSS3 magazine template based on Bootstrap 3.
                  </p>
                  <a href="page.html" className="btn btn-magz white">About Us <i className="ion-ios-arrow-thin-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="block">
                <h1 className="block-title">Popular Tags <div className="right"><a href="#">See All <i className="ion-ios-arrow-thin-right"></i></a></div></h1>
                <div className="block-body">
                  <ul className="tags">
                    <li><a href="#">HTML5</a></li>
                    <li><a href="#">CSS3</a></li>
                    <li><a href="#">Bootstrap 3</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Creative Mind</a></li>
                    <li><a href="#">Standing On The Train</a></li>
                    <li><a href="#">at 6.00PM</a></li>
                  </ul>
                </div>
              </div>
              <div className="line"></div>
              <div className="block">
                <h1 className="block-title">Newsletter</h1>
                <div className="block-body">
                  <p>By subscribing you will receive new articles in your email.</p>
                  <form className="newsletter">
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="ion-ios-email-outline"></i>
                      </div>
                      <input type="email" className="form-control email" placeholder="Your mail"/>
                    </div>
                    <button className="btn btn-primary btn-block white">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="block">
                <h1 className="block-title">Latest News</h1>
                <div className="block-body">
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img12.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">Donec consequat lorem quis augue pharetra</a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img14.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">eu dapibus risus aliquam etiam ut venenatis</a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img15.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">Nulla facilisis odio quis gravida vestibulum </a></h1>
                      </div>
                    </div>
                  </article>
                  <article className="article-mini">
                    <div className="inner">
                      <figure>
                        <a href="single.html">
                          <img src="images/news/img16.jpg" alt="Sample Article"/>
                        </a>
                      </figure>
                      <div className="padding">
                        <h1><a href="single.html">Proin venenatis pellentesque arcu vitae </a></h1>
                      </div>
                    </div>
                  </article>
                  <a href="#" className="btn btn-magz white btn-block">See All <i className="ion-ios-arrow-thin-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-12 col-sm-6">
              <div className="block">
                <h1 className="block-title">Follow Us</h1>
                <div className="block-body">
                  <p>Follow us and stay in touch to get the latest news</p>
                  <ul className="social trp">
                    <li>
                      <a href="#" className="facebook">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-twitter-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="youtube">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-youtube-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="googleplus">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-googleplus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-instagram-outline"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tumblr">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-tumblr"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dribbble">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="skype">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rss">
                        <svg><rect width="0" height="0" /></svg>
                        <i className="ion-social-rss"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="line"></div>
              <div className="block">
                <div className="block-body no-margin">
                  <ul className="footer-nav-horizontal">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Partner</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="page.html">About</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                COPYRIGHT &copy; MAGZ 2017. ALL RIGHT RESERVED.
                <div>
                  Made with <i className="ion-heart"></i> by <a href="http://kodinger.com">Kodinger</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home