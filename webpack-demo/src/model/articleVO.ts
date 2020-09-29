export interface ArticleVO {
	writer: string;
	date: Date
	title: string;
	description: string;
	likeCount: number;
	isAlreadyLike: boolean;
	tag: string[];
}