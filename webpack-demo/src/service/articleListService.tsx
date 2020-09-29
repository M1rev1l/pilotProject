"use strict";
import { ArticleVO } from "@model/articleVO";
import {getSamplePagination, getSampleArticleList} from "@service/sampleData";
import { Pagination } from "@src/model/pagination";

let articleList: ReadonlyArray<ArticleVO> = [];
let pagination: Pagination = null;

export default class ArticleListService {
	private constructor() {

	}

	wait(time: number) {
		return new Promise(resolve => setTimeout(resolve, time));
	}
	
	async loadPagination() {
		await this.wait(1000);
	
		// API call
	
		return getSamplePagination();
	}
	
	async loadArticleList() {
		await this.wait(1000);
	
		// API call
	
		return getSampleArticleList();
	}

	async init() {
		const [d1, d2] = await Promise.all([
			this.loadPagination(),
			this.loadArticleList()
		]);
	
		pagination = d1;
		articleList = d2;
	
		const {total, pageSize} = pagination;
	
		pagination.pageCount = Math.floor(total / pageSize) + (total % pageSize == 0 ? 0 : 1);
	};
	
	getPagination() {
		return pagination;
	};
	
	getArticleList() {
		return articleList || [];
	};
	
	selectPage(selectedPage: number) {
		pagination.page = selectedPage;
	}

	private static instance = new ArticleListService();

	static getInstance() {
		return this.instance;
	}
}
