import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import ArticleListService from '@service/articleListService';
import TagListService from '@service/tagListService';
import {ArticleList} from '@view/articleList/ArticleList';
import PageList from '@view/PageList/PageList';
import { TagList }  from '@view/TagList/TagList';
import FloatSidebar from '@view/FloatSidebar/FloatSidebar';
import { ArticleVO } from '@model/articleVO';
import { Pagination } from '@model/pagination';

interface Props {

}

interface State {
	articleList: ReadonlyArray<ArticleVO>;
	articlePagination: Pagination;
	tagList: ReadonlyArray<String>;
}

const articleListService = ArticleListService.getInstance()
const tagListService = TagListService.getInstance();

class Main extends React.Component<Props, State> {
	state: State = {
		articleList: [],
		articlePagination: null,
		tagList: []
	};

	componentDidMount() {
		
		tagListService.init().then(() => {
			this.setState({
				tagList: tagListService.TagList
			})
		});
		
		articleListService.init().then(() => {
			this.setState({
				articleList: articleListService.currentArticleList
				, articlePagination: articleListService.pagination
			});
		});
	}
	/*
	setPage = () {
		this.setState( prevState => ({
			articlePagination: 1
		}));
	}
	*/
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
						<ArticleList articleList={this.state.articleList}/>
					</ul>
					<div className="pagination">
						<PageList articlePagination={this.state.articlePagination}/>
					</div>
				</section>
				<aside className="tagBox">
					<div className="tagBoxTitle">
						Popular Tags
					</div>
					<TagList tagList={this.state.tagList}/>
				</aside>
			</div>
			<footer>
				Fork on GitHub
			</footer>
		</div>;
	}
}

ReactDOM.render(<Main/>, document.getElementById('root'));