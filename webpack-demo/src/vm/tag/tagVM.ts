import {TagListService} from '@service/tagListService';
import {ArticleListService} from '@service/articleListService'
import { action, computed } from 'mobx';

const tagService = TagListService.instance;
const articleService = ArticleListService.instance;
export class TagVM {
	@computed get tagList() {
		return tagService.tagList;
	}

	@computed get isEmpty() {
		return this.tagList != null;
	}

	@action
	handleTagComponentClick(tag: string) {
		tagService.selectedTag = tag;
		articleService.total = articleService.filteredArticleListLength;
		articleService.initCurrentPage();
	}
}