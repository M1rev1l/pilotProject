import * as React from "react";
import ProfileImage from '@resource/profile.jpg';
import { observer } from "mobx-react";
import { ArticleListItemVM } from "@src/vm/article/articleListItemVM";

interface Props {
	itemVM: ArticleListItemVM;
}

@observer
export default class Article extends React.Component<Props> {
	

	render() {
		const {
			writer, date, isAlreadyLike, likeCount, title, description, tag,
			handleLikeClick,
			handleArticleClick
		} = this.props.itemVM;

		return (
			<div onClick={handleArticleClick}>
				<div className="articleTop">
					<a className="profileImg">
						<img src={ProfileImage}/>
					</a>
					<div className="info">
						<a>
							<div className="writer greenText underlineHober">
								{writer}
							</div>
						</a>
						<div className="date greyText lighterText font14px">
							{date}
						</div>
					</div>
					<button onClick={handleLikeClick} className= { isAlreadyLike? "active" + " like greenText": "like greenText" }>
						<span>♥ </span>
						<span className="likeCount">{likeCount}</span>
					</button>
				</div>
				<div className="about">
					<a>
						<div className="title">{title}</div>
						<div className="description greyText font14px">{description}</div>
					</a>
				</div>
				<div className="etc">
					<a>
						<span className="readMore greyText lighterText font14px">Read more...</span>
						<span className="postTags greyText lighterText font14px">
							{tag}
						</span>
					</a>
				</div>
			</div>
		)
	}
}