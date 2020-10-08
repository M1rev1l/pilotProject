import {getSampleTagList} from "@service/sampleData";
import { computed, observable } from "mobx";


function wait(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}

export class TagListServiceInternal {
	@observable private _tagList: ReadonlyArray<string> = [];
	@observable private _selectedTag: string = null;

	async loadTagList() {
		await wait(1000);

		// API Call

		return getSampleTagList();
	}

	async init() {
		this._tagList = await this.loadTagList();
	};
	
	@computed get tagList() {
		return this._tagList;
	}
	
	@computed get selectedTag() {
		return this._selectedTag;
	}
	
	set selectedTag(value: string) {
		this._selectedTag = value;
	};
}

export namespace TagListService {
	export const instance = new TagListServiceInternal();
}