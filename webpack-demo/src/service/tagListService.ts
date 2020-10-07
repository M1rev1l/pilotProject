import {getSampleTagList} from "@service/sampleData";

let selectedTag: string = "default";

function wait(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}

export default class tagListService {
	private _tagList: ReadonlyArray<string> = [];

	async loadTagList() {
		await wait(1000);

		// API Call

		return getSampleTagList();
	}

	async init() {
		this._tagList = await this.loadTagList();
	};
	
	get TagList() {
		return this._tagList;
	}
	
	get SelectedTag() {
		return selectedTag;
	}
	
	set SelectedTag(value: string) {
		selectedTag = value;
	};

	private static instance = new tagListService();

	static getInstance() {
		return this.instance;
	}
}