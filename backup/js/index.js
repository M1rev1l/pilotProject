"use stirct";
// TODO: ES6 문법 교체
// TODO: 컴포넌트(모듈화) 시켜보기
// TODO: 모듈 이외에 전역접근 없도록 하기

(function() {
	const defaultFilter = "default";
	
	/*
	readArticleList().then( (value) => {
		initPage(value);
	});
	*/
	ARTICLE_LIST_SERVICE.init().then(() => {
		ARTICLE_LIST.render(ARTICLE_LIST_SERVICE.getArticleList(), defaultFilter);
		PAGE_LIST.render(ARTICLE_LIST_SERVICE.getPagination());
	});

	TAG_LIST_SERVICE.init().then(() => {
		TAG_LIST.render(TAG_LIST_SERVICE.getTagList());
	});

	function initPage(value) {

		TAG_LIST.render(value);
	
		PAGE_LIST.render(value);
		
		FLOAT_SIDEBAR.render();
	}
})();