"use strict";
(function() {

	var render = (tagList) => {

		tagList.forEach(function(item) {
			var tagSpan = document.createElement("span");
			
			tagSpan.append(item);
			tagSpan.className = "tag underlineHober";
			
			tagSpan.addEventListener("click", () => {
				CLICK_EVENT_HANDLER.render("tag", item)

				var filterItemSpan = document.createElement("span");
				var filterSpan = document.querySelector(".filter");

				document.querySelector(".filterItem.active").classList.remove("active");
				filterSpan.removeChild(filterSpan.childNodes[2])

				filterItemSpan.append(item);
				filterItemSpan.className = "filterItem newFilter active";

				filterSpan.append(filterItemSpan);
				
				//ARTICLE_LIST.render(articleData, item);
			})

			document.querySelector(".tagWrapper").append(tagSpan);
		})
	}

	window['TAG_LIST'] = {
		render: render
	};
})();