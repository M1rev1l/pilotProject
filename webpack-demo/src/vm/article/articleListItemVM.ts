import { ArticleListService } from '@service/articleListService'
import { ArticleVO } from "@src/model/articleVO";
import { computed } from "mobx";

const articleListService = ArticleListService.instance;

export class ArticleListItemVM {
	constructor(private readonly data: ArticleVO) {

	}

	readonly handleArticleClick = () => {
		/*
		const tag = articleProps.tag.map(item => item);

		alert("writer: " + articleProps.writer0
			+ "\ndate: " + articleProps.date
			+ "\ntitle: " + articleProps.title
			+ "\ndescription: " + articleProps.description
			+ "\ntag: " + tag);
		*/
	}

	readonly handleLikeClick = () => {
		if(this.data.isAlreadyLike) {
			alert("unlike");
			/*
			likeCountVal--;
			articleProps.likeCount = likeCountVal;
			articleProps.isAlreadyLike = false;
			*/
		} else {
			alert("like");
			/*
			likeCountVal++;
			articleProps.likeCount = likeCountVal;
			articleProps.isAlreadyLike = true;
			*/
		}
	}

	@computed get writer() {
		return this.data.writer;
	}

	@computed get date() {
		return this.data.date.toDateString();
	}

	@computed get isAlreadyLike() {
		return this.data.isAlreadyLike;
	}

	@computed get likeCount() {
		return this.data.likeCount;
	}

	@computed get title() {
		return this.data.writer;
	}

	@computed get description() {
		return this.data.description;
	}

	@computed get tag() {
		return this.data.tag;
	}
}