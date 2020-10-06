import * as React from 'react';
import TagComponent from './Tag';
import TagListService from '@service/tagListService';

interface Props {
	tagList: ReadonlyArray<String>
}

export class TagList extends React.Component<Props> {
	renderTagList() {
		return this.props.tagList.map((tagData, index) => {
			console.log(typeof(tagData));
			return (
				<span className="tag underlineHober">
					<TagComponent tag={this.props.tagList[index]}/>
				</span>
			)
		})
	}

	render() {
		if(this.props.tagList){
			return (
				<div className="tagWrapper">
					{this.renderTagList()}
				</div>
			)
		} else {
			return <div></div>;
		}
	}
}
/*
export class TagList2 {
	render(){
		const renderTag = new Tag();
		const tagListService = new TagListService();

		const tagList = tagListService.getTagList();
		
		tagList.forEach(function(item: string) {
			renderTag.render(item);
		})
	}
}
*/