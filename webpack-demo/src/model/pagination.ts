import { observable } from "mobx";

export interface PaginationVO {
	total: number;
	pageSize: number;
}

export class Pagination implements PaginationVO {
	readonly total: number;
	readonly pageSize: number = null;

	@observable private page: number = 1;

	constructor(vo: PaginationVO) {
		this.total = vo.total;
		this.pageSize = vo.pageSize;
	}

	get pageCount() {
		return Math.floor(this.total / this.pageSize) + (this.total % this.pageSize === 0 ? 0 : 1)
	}
	
	get currentPage() {
		return this.page;
	}

	set currentPage(page: number) {
		this.page = page;
	}
}