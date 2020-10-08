import * as React from "react";
import { PageVM } from "@src/vm/page/pageVM";
import {ArticleListService} from '@service/articleListService';
import PageComponent from '@view/pageList/Page';
import { observer } from "mobx-react";

const articleListService = ArticleListService.instance;

@observer
export default class PageList extends React.Component {
	readonly vm = new PageVM();

	render() {
		if (this.vm.isEmpty) {
			return (
				<ul>
					{Array(articleListService.pageCount).fill(0).map((_, index) => {
						const page = index + 1;
						const active = page === articleListService.currentPage;

						return <PageComponent key={index} page={page} active={active} onClick={this.vm.handleClickPage}/>;
					})}
				</ul>
			);
		}

		return <div></div>;
	}
}