(function() {

	let tagList = null;

	const init = () => {
		return new Promise(resolve => {
			setTimeout(() => resolve(
				tagList = [
					"asdf"
					, "13"
					, "das"
					, "83712498"
					, "testTag"
				]
			), 1000)
		})
	};

	const getTagList = () => {
		return tagList || [];
	}

	const selectTag = function() {

	};

	window['TAG_LIST_SERVICE'] = {
		init, getTagList, selectTag
	};
})();