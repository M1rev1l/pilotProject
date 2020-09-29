import ArticleListService from '@service/articleListService';
import ArticleList from '@view/articleList/ArticleList'

const articleListService = ArticleListService.getInstance();

export default class Page {

	onClick(page: any) {
		alert("page : " + page);
	}
	
	render(i: number) {
		const articleList = new ArticleList();
		const pageList = document.createElement("li");
		const pageAnchor = document.createElement("a");
	
		pageAnchor.innerText = i.toString();
		pageAnchor.className = "paginationBtn";
		
		if(i == articleListService.getPagination().page) {
			pageList.className = "paginationList underlineHober active"
		} else {
			pageList.className = "paginationList underlineHober";
		}
		pageList.append(pageAnchor);
		pageList.addEventListener("click", () => {
			this.onClick(i.toString());
	
			document.querySelector(".paginationList.active").classList.remove("active");
	
			pageList.classList.add("active");
	
			articleListService.selectPage(i);
			
			articleList.render();
		})
	
		document.querySelector(".pagination ul").append(pageList);
	}
}

