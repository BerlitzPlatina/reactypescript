import { useEffect } from 'react';
interface NameTitle {
	nameTitle: string;
}
function Article() {
	//xu ly side effect
	return (
		<div>
			<article className="col-md-12 article-list">
				<div className="inner">
					<figure>
						<a href="single.html">
							<img src="https://i1-vnexpress.vnecdn.net/2022/08/15/20modernstrippersuperjumbo-166-3493-3482-1660525418.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=kbpfWO8VDMsO_VOw3H7_bw" alt="Sample Article" />
						</a>
					</figure>
					<div className="details">
						<div className="detail">
							<div className="category">
								<a href="#">Film</a>
							</div>
							<div className="time">December 19, 2016</div>
						</div>
						<h1><a href="single.html">Làm sao để quên người cũ khi không muốn cắt đứt liên lạc</a></h1>
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
