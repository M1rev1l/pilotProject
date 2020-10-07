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

	readonly handleClickPage = (page: number) => {
		console.log(page);
		articleListService.selectPage(page);
		this.forceUpdate();
	};

	renderList() {
		const {pageCount, currentPage} = this.props.articlePagination;

		return Array(pageCount).fill(0).map((_, index) => {
			const page = index + 1;
			const active = page === currentPage;

			return <PageComponent page={page} active={active} onClick={this.handleClickPage}/>;
		});
	}

	render() {
		if(this.props.articlePagination) {
			return (
				<ul>
					{this.renderList() }
				</ul>
			);
		} else {
			return (
				<div></div>
			)
		}
	}
}