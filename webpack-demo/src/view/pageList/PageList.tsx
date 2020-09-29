import ArticleListService from '@service/articleListService';
import Page from '@view/pageList/Page';

const articleListService = ArticleListService.getInstance();

export default class PageList {
	render() {
		const renderPage = new Page();

		const {pageCount} = articleListService.getPagination();

		for(let i = 1; i <= pageCount; i++) {
			renderPage.render(i);
		}
	}
}