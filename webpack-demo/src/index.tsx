import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {ArticleListService} from '@service/articleListService';
import {TagListService} from '@service/tagListService';
import ArticleList from '@view/articleList/ArticleList';
import PageList from '@view/PageList/PageList';
import FloatTagSidebar from '@src/view/floatSidebar/FloatTagSidebar';
import { observer } from 'mobx-react';

const tagListService = TagListService.instance;
const articleListService = ArticleListService.instance;

@observer
class Main extends React.Component {
	async componentDidMount() {
		await tagListService.init();
		await articleListService.init();
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
						<ArticleList/>
					</ul>
					<div className="pagination">
						<PageList/>
					</div>
				</section>
				<FloatTagSidebar/>
			</div>
			<footer>
				Fork on GitHub
			</footer>
		</div>;
	}
}

ReactDOM.render(<Main/>, document.getElementById('root'));