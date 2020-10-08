import * as React from "react";
import ProfileImage from '@resource/profile.jpg';
import { observer } from "mobx-react";
import { ArticleListItemVM } from "@src/vm/article/articleListItemVM";

interface Props {
	itemVM: ArticleListItemVM;
}

@observer
export default class Article extends React.Component<Props> {
	readonly handleArticleClick = () => {
		const tag = articleProps.tag.map(item => item);

		alert("writer: " + articleProps.writer
			+ "\ndate: " + articleProps.date
			+ "\ntitle: " + articleProps.title
			+ "\ndescription: " + articleProps.description
			+ "\ntag: " + tag);
	}

	render() {
		const {handleLikeClick} = this.props.itemVM;

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
					<button onClick={handleLikeClick} className= { articleProps.isAlreadyLike? "active" + " like greenText": "like greenText" }>
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