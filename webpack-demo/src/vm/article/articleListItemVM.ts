import { ArticleListService } from '@service/articleListService'
import { ArticleVO } from "@src/model/articleVO";
import { computed } from "mobx";

const articleListService = ArticleListService.instance;

export class ArticleListItemVM {
	constructor(private readonly data: ArticleVO) {

	}

	readonly handleArticleClick = () => {
		const tag = this.data.tag.map(item => item);

		alert("writer: " + this.data.writer
			+ "\ndate: " + this.data.date
			+ "\ntitle: " + this.data.title
			+ "\ndescription: " + this.data.description
			+ "\ntag: " + tag);
	}

	readonly handleLikeClick = () => {
		if(this.data.isAlreadyLike) {
			alert("unlike");
			this.data.likeCount--;
			this.data.isAlreadyLike = false;
		} else {
			alert("like");
			this.data.likeCount++;
			this.data.isAlreadyLike = true;
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