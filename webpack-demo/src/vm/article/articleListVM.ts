import {ArticleListService} from '@service/articleListService';
import { computed } from 'mobx';
import { ArticleListItemVM } from './articleListItemVM';

const service = ArticleListService.instance;

export class ArticleListVM {
	@computed private get articleList() {
		return service.currentArticleList;
	}

	@computed get itemVMList() {
		return this.articleList?.map(v => new ArticleListItemVM(v)) ?? [];
	}

	@computed get isEmpty() {
		return !this.articleList?.length;
	}
}