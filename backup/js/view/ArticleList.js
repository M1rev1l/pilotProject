"use strict";
(function() {
	const articleTemplate = document.querySelector("#articleTemplate");
	const articleList = document.querySelector("#articleList");

	const render = function(articleData, filter) {
		clearList();
		
		for(let i = 0;  i < articleData.length; i++) {
			const templateNode = articleTemplate.content.cloneNode(true);
			const article = templateNode.querySelector(".article");
			let validateFilter = false;

			// 선택된 태그가 있는경우 해당 태그들만 노출하고, 기본선택인 경우 모두 노출
			articleData[i].tag.some((item) => {
				if(filter == item) {
					return validateFilter = true;
				}
			});
			if(filter == "default") {
				validateFilter = true;
			}
			if(validateFilter) {
				// TODO: data-attribute 사용해보기
				((articleData) => {
					article.addEventListener("click", function() {
						CLICK_EVENT_HANDLER.render("article", articleData)
					})
					templateNode.querySelector(".like").addEventListener("click", function() {
						if(articleData.isAlreadyLike) {
							articleData.likeCount--;
							this.children[1].innerText = articleData.likeCount;
							this.classList.remove("active");
							articleData[j].isAlreadyLike = false;
						} else {
							articleData.likeCount++;
							this.children[1].innerText = articleData.likeCount;
							this.classList.add("active");
							articleData.isAlreadyLike = true;
						}
					})
		
				})(articleData[i]);
		
				templateNode.querySelector(".writer").innerText = articleData[i].writer;
				templateNode.querySelector(".date").innerText = articleData[i].date;
				templateNode.querySelector("#likeCount").innerText = articleData[i].likeCount;
				templateNode.querySelector(".title").innerText = articleData[i].title;
				templateNode.querySelector(".description").innerText = articleData[i].description;
		
				articleData[i].tag.forEach((item) => {
					const postTagSpan = document.createElement("span");
					postTagSpan.append(item);
					postTagSpan.className = "postTag";
					templateNode.querySelector(".postTags").append(postTagSpan);	
				})
				articleList.append(templateNode);
			}
		}
	}

	function clearList() {
		const articleParent = document.querySelector("#articleList");
		
		while( articleParent.firstChild ){
			articleParent.removeChild( articleParent.firstChild );
		}
	}

	window['ARTICLE_LIST'] = {
		render: render
	};
})();