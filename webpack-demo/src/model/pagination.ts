export interface PaginationVO {
	total: number;
	pageSize: number;
}

export class Pagination implements PaginationVO {
	readonly total: number;
	readonly pageSize: number = null;

	private page: number = null;

	constructor(vo: PaginationVO) {
		this.total = vo.total;
		this.pageSize = vo.pageSize;
	}

	get pageCount() {
		return Math.floor(this.total / this.pageSize) + (this.total % this.pageSize === 0 ? 0 : 1)
	}

	get pageIndex() {
		return (this.page - 1) * this.pageSize
	}

	set currentPage(page: number) {
		this.page = page;
	}

	get currentPage() {
		return this.page;
	}
}