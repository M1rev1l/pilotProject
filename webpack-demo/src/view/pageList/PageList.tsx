import * as React from "react";
import ArticleListService from '@service/articleListService';
import { PageComponent } from '@view/pageList/Page';
import { Pagination } from '@model/pagination';
const articleListService = ArticleListService.getInstance();

/*
export default class PageList {
	render() {
		const renderPage = new Page();

		const {pageCount} = articleListService.pagination;

		for(let i = 1; i <= pageCount; i++) {
			renderPage.render(i);
		}
	}
}
*/

interface Props {
	articlePagination: Pagination
}

export default class PageList extends React.Component<Props> {

	clickPageBtnHandler(index:number) {
		console.log(index);
		articleListService.selectPage(index);
		this.forceUpdate();
	}


	renderList() {
		return [...Array(this.props.articlePagination.pageCount)].map((value, index) => {
			return (
				<li key={index} onClick={() => {this.clickPageBtnHandler(index)}} 
					className={ index === this.props.articlePagination.currentPage ? "paginationList underlineHober active" : "paginationList underlineHober"}>
					<PageComponent  articlePagination={this.props.articlePagination} index={index+1}/>
				</li>
			);
		})
	}

	render() {
		if(this.props.articlePagination) {
			return (
				<ul>
					{ this.renderList() }
				</ul>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
}