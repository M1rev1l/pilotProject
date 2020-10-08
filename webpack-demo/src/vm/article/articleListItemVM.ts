import { ArticleVO } from "@src/model/articleVO";
import { computed } from "mobx";

export class ArticleListItemVM {
	constructor(private readonly data: ArticleVO) {

	}

	readonly handleLikeClick = () => {
		if(this.data.isAlreadyLike) {
			likeCountVal--;
			articleProps.likeCount = likeCountVal;
			articleProps.isAlreadyLike = false;
		} else {
			likeCountVal++;
			articleProps.likeCount = likeCountVal;
			articleProps.isAlreadyLike = true;
		}
	}

	@computed get writer() {
		return this.data.writer;
	}

	@computed get date() {
		return this.data.date.toDateString();
	}
}