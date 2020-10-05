import * as React from "react";
import { ArticleVO } from '@model/articleVO';
import ProfileImage from '@resource/profile.jpg';
import ArticleListService from '@service/articleListService';
import tagListService from '@service/tagListService';

export default class Article extends React.Component<{articleData:ArticleVO}> {

	state = {
		isAlreadyLike: false
		, likeCount: 0
	}

	componentWillMount() {
		this.setState(this.props.articleData);
	}

	handleLikeClick(articleProps: ArticleVO) {
		console.log(articleProps);

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
		console.log("render : " + this.state.likeCount);
		console.log("prop: " + articleProps.likeCount)
		return (
			<div>
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
							{this.state.likeCount}
						</div>
					</div>
					<button onClick={() => this.handleLikeClick(articleProps)} className="like greenText">
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

const articleTemplate: any = document.querySelector("#articleTemplate");
const articleList: Element = document.querySelector("#articleList");
const tagListService1 = new tagListService();

const articleListService = ArticleListService.getInstance();



class a {

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