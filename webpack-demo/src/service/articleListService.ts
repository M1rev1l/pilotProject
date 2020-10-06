import { ArticleVO } from "@model/articleVO";
import { Pagination } from "@model/pagination";
import {getSamplePagination, getSampleArticleList} from "@service/sampleData";

function wait(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}

export default class ArticleListService {
	private _articleList: ReadonlyArray<ArticleVO> = [];
	private _pagination: Pagination = null;

	private constructor() {

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
	
		this._pagination = new Pagination(d1);
		this._articleList = d2;
	};

	get currentArticleList() {
		return this._articleList.slice(0, this._pagination.pageSize);
	}

	get pagination() {
		return this._pagination;
	}
	
	selectPage(selectedPage: number) {
		console.log(this._pagination);
		this._pagination.currentPage = selectedPage;
	}

	like() {

	}

	unlike() {

	}

	private static instance = new ArticleListService();

	static getInstance() {
		return this.instance;
	}
}
