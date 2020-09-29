"use strict";

let tagList: string[] = null;

let selectedTag: string = "default";

export default class tagListService {
	init() {
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
	
	getTagList() {
		return tagList;
	}
	
	getSelectedTag() {
		return selectedTag;
	}
	
	setSelectedTag(value: string) {
		selectedTag = value;
	};
}