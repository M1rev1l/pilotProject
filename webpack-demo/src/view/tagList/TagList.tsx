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

/* 리액트 훅스 예제
const Sample: React.FC<Props> = (props) => {
	const [count, updateCount] = React.useState<number>(0);
	const [name, updateName] = React.useState<string>("My Name");

	React.useEffect(() => {
		console.log('count updated')
	}, [count]);

	React.useEffect(() => {
		console.log('count and name updated')
	}, [count, name]);

	React.useEffect(() => {
		console.log('Component Mounted')
	}, []);

	const handleUpdate = () => {
		updateCount(2);
		updateName("Your Name");
	};

	return <div onClick={handleUpdate}>{count} - {name}</div>;
};
*/