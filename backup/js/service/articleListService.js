

"use strict";
(function() {
	let articleList = null;
	let pagination = null;

	let loading = false;
	const init = () => {
		loading = true;
		return new Promise(resolve => {
			setTimeout(() => {
				pagination = {
					page : 1
					, total : 4
					, pageSize : 2
				};
				articleList = [
					{
						writer  : "hanmir1"
						, date  : new Date()
						, title : "testTitle1"
						, description : "testDescription1"
						, likeCount : 0
						, isAlreadyLike : false
						, tag : [
							"asdf", "83712498"
						]
					}
					, {
						writer  : "hanmir2"
						, date  : new Date()
						, title : "testTitle2"
						, description : "testDescription2"
						, likeCount : 333
						, isAlreadyLike : false
						, tag : [
							"asdf", "13", "das"
						]
					}
					, {
						writer  : "hanmir1"
						, date  : new Date()
						, title : "testTitle1"
						, description : "testDescription1"
						, likeCount : 0
						, isAlreadyLike : false
						, tag : [
							"asdf", "83712498"
						]
					}
					, {
						writer  : "hanmir2"
						, date  : new Date()
						, title : "testTitle2"
						, description : "testDescription2"
						, likeCount : 333
						, isAlreadyLike : false
						, tag : [
							"asdf", "13", "das"
						]
					}
				];
				resolve();
			}, 1000);
		});
	};

	const getPagination = () => {
		return pagination;
	};

	const getArticleList = () => {
		return articleList || [];
	};

	const selectPage = (selectedPage) => {
		pagination.page = selectedPage;

		alert(pagination.page);
		return true;
	}


	window['ARTICLE_LIST_SERVICE'] = {
		init, getArticleList, getPagination, selectPage
	};
})();