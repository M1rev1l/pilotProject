import * as React from "react";
import * as ReactDOM from "react-dom";
import Article from '@view/articleList/Article';
import ArticleListService from '@service/articleListService';
import { Component } from '../Component';

const service = ArticleListService.getInstance();

export default class ArticleList2 extends Component {
	readonly articleParent = document.querySelector("#articleList");

	clearList() {
		while( this.articleParent.firstChild ){
			this.articleParent.removeChild( this.articleParent.firstChild );
		}
	}

	render() {
		this.clearList();

		const {pageSize, page} = service.getPagination();
		const articleData = service.getArticleList();
		const pageIndex = (page - 1) * pageSize;

		for (let i = 0; i < pageSize && articleData[pageIndex + i]; ++i) {
			//const renderArticle = new Article();

			//renderArticle.render();
		}
	}
}

export class ArticleList extends React.Component {

	state = {
		articleDatas: [
			{
				writer: ""
				, date: new Date()
				, title: ""
				, description: ""
				, likeCount: 0
				, isAlreadyLike: false
				, tag: [] as string[]
			}
		]
	}

	render() {
		console.log("hello");
		return <div>
		</div>;

	/*	
{this.state.articleDatas.map(articleData => (
	<Article
		writer={ this.props.writer }
	/>
))}
	*/

	}
}
