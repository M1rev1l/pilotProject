import { ArticleListService } from '@service/articleListService'
import { computed } from 'mobx';

const service = ArticleListService.instance;

export class PageVM {

	@computed private get _pagination() {
		return service.pagination;
	}

	@computed get isEmpty() {
		return this._pagination != null ?? true;
	}
	
	// handler 보다 on 으로 선언하는게 나음
	handleClickPage(page: number) {
		service.selectPage(page);
	}

	@computed
	get makePageArray() {
		return Array(service.pageCount).fill(0);
	}
}