"use strict";
import Article from '@view/articleList/Article';
import ArticleListService from '@service/articleListService';
import { Component } from '../Component';

const service = ArticleListService.getInstance();

export default class ArticleList extends Component {
	readonly articleParent = document.querySelector("#articleList");

	clearList() {
		console.log(this.articleParent);
		
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
			const renderArticle = new Article(pageIndex + i);

			renderArticle.render();
		}
	}
}