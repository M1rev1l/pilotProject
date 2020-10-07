import * as React from 'react';
import TagComponent from './Tag';

interface Props {
	tagList: ReadonlyArray<string>
}

export default class TagList extends React.Component<Props> {
	renderTagList() {
		return this.props.tagList.map((tagData, index) => (
			<TagComponent key={index} tag={tagData}/>
		));
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