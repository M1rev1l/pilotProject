import { ArticleVO } from "@model/articleVO";
import { PaginationVO } from "@model/pagination";

export function getSamplePagination(): PaginationVO {
	return {
		total : 12
		, pageSize : 5
	};
}

export function getSampleArticleList(): ArticleVO[] {
	return [
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
			writer  : "hanmir3"
			, date  : new Date()
			, title : "testTitle3"
			, description : "testDescription3"
			, likeCount : 0
			, isAlreadyLike : false
			, tag : [
				"asdf", "83712498"
			]
		}
		, {
			writer  : "hanmir4"
			, date  : new Date()
			, title : "testTitle4"
			, description : "testDescription4"
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
		, {
			writer  : "hanmir3"
			, date  : new Date()
			, title : "testTitle3"
			, description : "testDescription3"
			, likeCount : 0
			, isAlreadyLike : false
			, tag : [
				"asdf", "83712498"
			]
		}
		, {
			writer  : "hanmir4"
			, date  : new Date()
			, title : "testTitle4"
			, description : "testDescription4"
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
		, {
			writer  : "hanmir3"
			, date  : new Date()
			, title : "testTitle3"
			, description : "testDescription3"
			, likeCount : 0
			, isAlreadyLike : false
			, tag : [
				"asdf", "83712498"
			]
		}
		, {
			writer  : "hanmir4"
			, date  : new Date()
			, title : "testTitle4"
			, description : "testDescription4"
			, likeCount : 333
			, isAlreadyLike : false
			, tag : [
				"asdf", "13", "das"
			]
		}
	];
}

export function getSampleTagList():string[] {
	return [
		"asdf"
		, "13"
		, "das"
		, "83712498"
		, "testTag"
	] 
}