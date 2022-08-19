import { useEffect } from 'react';
import {Article as IArticle} from "../articles/type" 
interface NameTitle {
	nameTitle: string;
}
function Article(article: IArticle) {
	//xu ly side effect
	return (
		<div>
			<article className="col-md-12 article-list">
				<div className="inner">
					<figure>
						<a href="single.html">
							<img src={article.img} alt="Sample Article" />
						</a>
					</figure>
					<div className="details">
						<div className="detail">
							<div className="category">
								<a href="#">Film</a>
							</div>
							<div className="time">December 19, 2016</div>
						</div>
						<h1><a href="single.html">{article.title}</a></h1>
						<footer>
							<a href="#" className="love"><i className="ion-android-favorite-outline"></i> <div>273</div></a>
							<a className="btn btn-primary more" href="single.html">
								<div>More</div>
								<div><i className="ion-ios-arrow-thin-right"></i></div>
							</a>
						</footer>
					</div>
				</div>
			</article>
		</div>
	)
}
export default Article
