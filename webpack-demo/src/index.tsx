import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import ArticleListService from '@service/articleListService';
import TagListService from '@service/tagListService';
import * as ArticleList from '@view/articleList/articleList';
import PageList from '@view/PageList/PageList';
import TagList  from '@view/TagList/TagList';
import FloatSidebar from '@view/FloatSidebar/FloatSidebar';

class Main extends React.Component {

	componentDidMount() {

		const renderArticleList = new ArticleList.default();
		const renderPageList = new PageList();
		const renderTagList = new TagList();
		const renderfloatSidebar = new FloatSidebar();
		const tagListService = new TagListService();
		
		tagListService.init().then(function() {
			renderTagList.render();
			renderfloatSidebar.render();
		});
		
		ArticleListService.getInstance().init().then(() => {
			renderPageList.render();
			this.setState({
				articleDatas: ArticleListService.getInstance().getArticleList()
				, articlePagination: ArticleListService.getInstance().getPagination()
			});
		});
	}
	
	render() {
		return <div>
			<nav>
				<a className="logoWrapper" href="./index.html">
					<span className="logo greenText">conduit</span>
				</a>
				<span className="topNavigation">
					<a className="greyText" href="./index.html">Home</a>
					<a className="greyText" href="./signIn.html">Sign in</a>
					<a className="greyText" href="./signUp.html">Sign up</a>
				</span>
			</nav>
			<header id="mainHeader">
				<div className="titleBox">
					<h1 className="title1">conduit</h1>
					<h2 className="title2">A place to share your knowledge.</h2>
				</div>
			</header>
			<div id="contentWrap">
				<section>
					<div className="filter">
						<span className="filterItem active">Global Feed</span>
					</div>
					<ul id="articleList">
						<ArticleList.ArticleList
							articleDataProps = {this.state}
						/>
					</ul>
					<div className="pagination">
						<ul></ul>
					</div>
				</section>
				<aside className="tagBox">
					<div className="tagBoxTitle">
						Popular Tags
					</div>
					<div className="tagWrapper"></div>
				</aside>
			</div>
			<footer>
				Fork on GitHub
			</footer>
		</div>;
	}
}

ReactDOM.render(<Main/>, document.getElementById('root'));