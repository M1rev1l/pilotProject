import TagListService from '@service/tagListService';
import ArticleList from '@view/ArticleList/ArticleList';

export default class Tag {
	onClick(data: string) {
		alert("tag : " + data);
	}
	
	render(item: string) {
		const tagSpan = document.createElement("span");
		const tagListService = new TagListService();
		const articleList = new ArticleList();

		tagSpan.append(item);
		tagSpan.className = "tag underlineHober";
	
		tagSpan.addEventListener("click", () => {
			this.onClick(item);
	
			const filterItemSpan = document.createElement("span");
			const filterSpan = document.querySelector(".filter");
	
			document.querySelector(".filterItem.active").classList.remove("active");
			filterSpan.removeChild(filterSpan.childNodes[2])
	
			filterItemSpan.append(item);
			filterItemSpan.className = "filterItem newFilter active";
	
			filterSpan.append(filterItemSpan);
	
			tagListService.setSelectedTag(item);
			
			articleList.render();
		})
	
		document.querySelector(".tagWrapper").append(tagSpan);
	}
}
