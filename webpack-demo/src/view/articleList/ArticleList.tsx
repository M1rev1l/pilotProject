import * as React from "react";
import Article from '@view/articleList/Article';
import ArticleListService from '@service/articleListService';
import { ArticleVO } from "@model/articleVO";

const service = ArticleListService.getInstance();

//리액트 미적용 소스, 태그&페이지네이션에서 사용하므로 수정 전 까지 유지
export class ArticleList2 {
	readonly articleParent = document.querySelector("#articleList");

	clearList() {
		while( this.articleParent.firstChild ){
			this.articleParent.removeChild( this.articleParent.firstChild );
		}
	}

	render() {
		this.clearList();

		const {pageSize, pageIndex} = service.pagination;
		const articleData = service.currentArticleList;

		for (let i = 0; i < pageSize && articleData[pageIndex + i]; ++i) {
			//const renderArticle = new Article();

			//renderArticle.render();
		}
	}
}

interface Props {
	articleList: ReadonlyArray<ArticleVO>
}

export class ArticleList extends React.Component<Props> {

	render() {
		if (this.props.articleList) {
			return this.props.articleList.map((articleData, index) => (
				<li className="article" key={index}>
					<Article articleData={articleData}/>
				</li>
			));
		}
		return <div>this List is in loading.</div>;
	}
}