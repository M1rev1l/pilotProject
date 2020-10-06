import * as React from "react";
import { ArticleVO } from '@model/articleVO';
import ProfileImage from '@resource/profile.jpg';
import ArticleListService from '@service/articleListService';
import tagListService from '@service/tagListService';

interface Props {
	articleData: Readonly<ArticleVO>;
}

const service = ArticleListService.getInstance();

export default class Article extends React.Component<Props> {

	handleArticleClick(articleProps: ArticleVO) {
		const tag = articleProps.tag.map(item => item);

		alert("writer: " + articleProps.writer
			+ "\ndate: " + articleProps.date
			+ "\ntitle: " + articleProps.title
			+ "\ndescription: " + articleProps.description
			+ "\ntag: " + tag);
	}

	handleLikeClick(articleProps: ArticleVO) {
		let likeCountVal:number = articleProps.likeCount;

		if(articleProps.isAlreadyLike) {
			likeCountVal--;
			articleProps.likeCount = likeCountVal;
			articleProps.isAlreadyLike = false;
			//dom.classList.remove("active");
			this.forceUpdate();
		} else {
			likeCountVal++;
			articleProps.likeCount = likeCountVal;
			articleProps.isAlreadyLike = true;
			//dom.classList.add("active");
			this.forceUpdate();
		}
	}

	render() {
		const articleProps = this.props.articleData;
		return (
			<div onClick={() => this.handleArticleClick(articleProps)}>
				<div className="articleTop">
					<a className="profileImg">
						<img src={ProfileImage}/>
					</a>
					<div className="info">
						<a>
							<div className="writer greenText underlineHober">
								{articleProps.writer}
							</div>
						</a>
						<div className="date greyText lighterText font14px">
							{articleProps.date.toDateString()}
						</div>
					</div>
					<button onClick={() => this.handleLikeClick(articleProps)} className= { articleProps.isAlreadyLike? "active" + " like greenText": "like greenText" }>
						<span>♥ </span>
						<span className="likeCount">{articleProps.likeCount}</span>
					</button>
				</div>
				<div className="about">
					<a>
						<div className="title">{articleProps.title}</div>
						<div className="description greyText font14px">{articleProps.description}</div>
					</a>
				</div>
				<div className="etc">
					<a>
						<span className="readMore greyText lighterText font14px">Read more...</span>
						<span className="postTags greyText lighterText font14px">
							{articleProps.tag}
						</span>
					</a>
				</div>
			</div>
		)
	}
}

/* 레거시 소스(리액트 반영전)
const articleTemplate: any = document.querySelector("#articleTemplate");
const articleList: Element = document.querySelector("#articleList");
const tagListService1 = new tagListService();
const articleListService = ArticleListService.getInstance();

class Article {

	get data() {
		return articleListService.getArticleList()[this.index];
	}

	readonly handleClick = (e: MouseEvent) => {
		const data = this.data;
		const tag = data.tag.map(item => item);

		alert("writer: " + data.writer
			+ "\ndate: " + data.date
			+ "\ntitle: " + data.title
			+ "\ndescription: " + data.description
			+ "\ntag: " + tag);
	};

	readonly handleLikeClick = (dom: HTMLButtonElement) => {
		if(this.data.isAlreadyLike) {
			this.data.likeCount--;
			dom.classList.remove("active");
			this.data.isAlreadyLike = false;
		} else {
			this.data.likeCount++;
			dom.classList.add("active");
			this.data.isAlreadyLike = true;
		}
		(dom.children[1] as HTMLSpanElement).innerText = this.data.likeCount.toString() ?? '';
	};

	constructor(private readonly index: number) {
		
	}

	render() {
		const templateNode = articleTemplate.content.cloneNode(true);
		const article = templateNode.querySelector(".article");
		let validateFilter: boolean = false;
		let myProfileImage: HTMLImageElement = new Image();
		myProfileImage.src = ProfileImage;
	
		const filter = tagListService1.getSelectedTag();
		const data = this.data;
	
		// 선택된 태그가 있는경우 해당 태그들만 노출하고, 기본선택인 경우 모두 노출
		validateFilter = data.tag.some(item => filter === item);
	
		if(filter === "default") {
			validateFilter = true;
		}

		if(validateFilter) {
			// TODO: data-attribute 사용해보기
			article.addEventListener("click", this.handleClick);
			templateNode.querySelector(".like").addEventListener("click", function() {
				this.handleLikeClick();
			});

			const {writer, date, likeCount, title, description, isAlreadyLike} = data;

			templateNode.querySelector(".writer").innerHTML = writer;
			templateNode.querySelector(".date").innerHTML = date?.toString() ?? '';
			templateNode.querySelector(".likeCount").innerHTML = likeCount?.toString() ?? '';
			templateNode.querySelector(".title").innerHTML = title;
			templateNode.querySelector(".description").innerHTML = description;
			templateNode.querySelector(".profileImg").appendChild(myProfileImage);

			data.tag.forEach((item) => {
				const postTagSpan = document.createElement("span");
				postTagSpan.append(item);
				postTagSpan.className = "postTag";
				templateNode.querySelector(".postTags").append(postTagSpan);	
			})
	
			if(isAlreadyLike) {
				templateNode.querySelector(".like").classList.add("active");
			}
			console.log(articleList);
			articleList.append(templateNode);
		}
	}
}
*/