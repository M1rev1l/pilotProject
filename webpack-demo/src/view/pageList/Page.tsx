import * as React from 'react';

import ArticleListService from '@service/articleListService';
import { Pagination } from '@model/pagination';

const articleListService = ArticleListService.getInstance();

export default class Page {

	onClick(page: any) {
		alert("page : " + page);
	}
	
	render(i: number) {
		const pageList = document.createElement("li");
		const pageAnchor = document.createElement("a");
	
		pageAnchor.innerText = i.toString();
		pageAnchor.className = "paginationBtn";
		
		if(i == articleListService.pagination.currentPage) {
			pageList.className = "paginationList underlineHober active"
		} else {
			pageList.className = "paginationList underlineHober";
		}
		pageList.append(pageAnchor);
		pageList.addEventListener("click", () => {
			this.onClick(i.toString());
	
			document.querySelector(".paginationList.active").classList.remove("active");
	
			pageList.classList.add("active");
	
			articleListService.selectPage(i);
		})
	
		document.querySelector(".pagination ul").append(pageList);
	}
}

interface Props {
	page: number;
	active?: boolean;

	onClick(page: number): void;
}

export class PageComponent extends React.Component<Props> {
	readonly handleClick = () => {
		this.props.onClick(this.props.page);
	};

	render() {
		const {page, active} = this.props;
		const cn = `paginationList underlineHober ${active ? 'active' : ''}`;
		
		return (
			<li className={cn} onClick={this.handleClick}>
				<a className="paginationBtn">{this.props.page}</a>
			</li>
		);
	}
}