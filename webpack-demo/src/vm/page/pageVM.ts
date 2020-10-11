import { ArticleListService } from '@service/articleListService'
import { computed } from 'mobx';

const service = ArticleListService.instance;

export class PageVM {

	@computed private get Pagination() {
		return service.pagination;
	}

	@computed get isEmpty() {
		return this.Pagination != null ?? true;
	}
	
	handleClickPage(page: number) {
		service.selectPage(page);
	}

	makePageArray() {
		return Array(service.pageCount).fill(0);
	}
}