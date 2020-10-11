import {TagListService} from '@service/tagListService';
import {ArticleListService} from '@service/articleListService'
import { computed } from 'mobx';

const tagService = TagListService.instance;
const articleService = ArticleListService.instance;
export class TagVM {
	@computed private get tagList() {
		return tagService.tagList;
	}

	@computed get tagListMap() {
		return this.tagList
	}

	@computed get isEmpty() {
		return this.tagList != null ?? true;
	}

	handleTagComponentClick(tag: string) {
		tagService.selectedTag = tag;
		articleService.initCurrentPage();
	}
}