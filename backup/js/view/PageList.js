"use strict";
(function() {


	var render = function(pagination) {
		
		const total = pagination.total;
		const page = pagination.page;
		const pageSize = pagination.pageSize;
		const pageCount = total%pageSize == 0 ? (total / pageSize) : (total / pageSize) + 1;

		for(var i = 1; i <= pageCount; i++) {
			var pageList = document.createElement("li");
			var pageAnchor = document.createElement("a");
	
			pageAnchor.innerText = i;
			pageAnchor.className = "paginationBtn";
			
			if(i == page) {
				pageList.className = "paginationList underlineHober active"
			} else {
				pageList.className = "paginationList underlineHober";
			}
			pageList.append(pageAnchor);
	
			(function(j) {
				pageList.addEventListener("click", function() {
					CLICK_EVENT_HANDLER.render("page", j);
	
					document.querySelector(".paginationList.active").classList.remove("active");
	
					this.classList.add("active");

					ARTICLE_LIST_SERVICE.selectPage(j);
				})
			})(i);
			
	
			document.querySelector(".pagination ul").append(pageList);
		}
	}
	window["PAGE_LIST"] = {
		render:render
	}
})();