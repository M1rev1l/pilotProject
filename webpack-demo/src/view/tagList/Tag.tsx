import * as React from 'react';
import TagListService from '@service/tagListService';
import {ArticleList2} from '@view/ArticleList/ArticleList';

interface Props {
	tag: String
}

export default class TagComponent extends React.Component<Props> {
	render() {
		return (
			<span>
				{this.props.tag}
			</span>
		)
	}
}

export class Tag {
	onClick(data: string) {
		alert("tag : " + data);
	}
	
	render(item: string) {
		const tagSpan = document.createElement("span");
		const articleList = new ArticleList2();

		tagSpan.append(item);
		tagSpan.className = "tag underlineHober";
	
		tagSpan.addEventListener("click", () => {
			this.onClick(item);
	
			const filterItemSpan = document.createElement("span");
			const filterSpan = document.querySelector(".filter");
	
			document.querySelector(".filterItem.active").classList.remove("active");
			filterSpan.removeChild(filterSpan.childNodes[2])
	
			filterItemSpan.append(item);
			filterItemSpan.className = "filterItem newFilter active";
	
			filterSpan.append(filterItemSpan);
	
			//tagListService.setSelectedTag(item);
			
			articleList.render();
		})
	
		document.querySelector(".tagWrapper").append(tagSpan);
	}
}
