import { ArticleVO } from "@model/articleVO";
import { Pagination } from "@model/pagination";
import { TagListService }  from "@service/tagListService";
import {getSamplePagination, getSampleArticleList} from "@service/sampleData";
import { action, computed, observable, runInAction } from "mobx";

function wait(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}

const tagListService = TagListService.instance;

class ArticleListServiceInternal {
	@observable private _articleList: ReadonlyArray<ArticleVO> = [];
	@observable private _pagination: Pagination = null;

	constructor() {

	}
	
	async loadPagination() {
		await wait(1000);
	
		// API call
	
		return getSamplePagination();
	}
	
	async loadArticleList() {
		await wait(1000);
	
		// API call
	
		return getSampleArticleList();
	}

	async init() {
		const [d1, d2] = await Promise.all([
			this.loadPagination(),
			this.loadArticleList()
		]);
	
		runInAction(() => {
			this._pagination = new Pagination(d1);
			this._articleList = d2;
		});
	};

	@computed private get filterArticleList() {
		const {selectedTag} = tagListService;
		if (selectedTag) {
			return this._articleList.filter(listData => (
				listData.tag.some(tagData => tagData === selectedTag)
			));
		}
		return this._articleList;
	}

	get currentArticleList() {
		if (this._pagination) {
			const {currentPage, pageSize} = this._pagination;

			const endPage = currentPage * pageSize;
			const startPage = endPage - pageSize;
			
			return this.filterArticleList?.slice(startPage, endPage) ?? [];
		}

		return this.filterArticleList;
	}

	@action
	selectPage(selectedPage: number) {
		this._pagination.currentPage = selectedPage;
	}

	@computed get total() {
		return this.filterArticleList.length;
	}
	
	initCurrentPage() {
		this._pagination.currentPage = 1;
	}
}

export namespace ArticleListService {
	export const instance = new ArticleListServiceInternal();
}