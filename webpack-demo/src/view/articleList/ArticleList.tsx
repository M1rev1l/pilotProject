import * as React from "react";
import * as ReactDOM from "react-dom";
import Article from '@view/articleList/Article';
import ArticleListService from '@service/articleListService';
import { ArticleVO } from "@src/model/articleVO";

const service = ArticleListService.getInstance();

//리액트 미적용 소스, 태그&페이지네이션에서 사용하므로 수정 전 까지 유지
export default class ArticleList2 {
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

export class ArticleList extends React.Component<{articleDataProps:any}> {

	render() {
		
		if(this.props.articleDataProps){
			console.log(this.props);

			const articleMap = this.props.articleDataProps.articleDatas;

			const mapToComponet = (data: []) => {
				return data.map((articleData: ArticleVO, index: number) => {
					return (
						<li className="article" key={index}>
							<Article
								articleData = { articleData }
							/>
						</li>
						
					)
				})
			}

			return mapToComponet(articleMap);
		} else {
			return <div>
				this List is in loading.
			</div>;
		}
	}
}