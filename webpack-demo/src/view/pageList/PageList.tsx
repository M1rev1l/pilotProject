import * as React from "react";
import {ArticleListService} from '@service/articleListService';
import PageComponent from '@view/pageList/Page';
import { observer } from "mobx-react";

const articleListService = ArticleListService.instance;

@observer
export default class PageList extends React.Component {

	readonly handleClickPage = (page: number) => {
		articleListService.selectPage(page);
	};

	render() {
		const pagination = articleListService.pagination;

		if (pagination) {
			const {pageCount, currentPage} = pagination;
			return (
				<ul>
					{Array(pageCount).fill(0).map((_, index) => {
						const page = index + 1;
						const active = page === currentPage;

						return <PageComponent key={index} page={page} active={active} onClick={this.handleClickPage}/>;
					})}
				</ul>
			);
		}

		return <div></div>;
	}
}