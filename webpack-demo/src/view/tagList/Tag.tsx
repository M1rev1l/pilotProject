import * as React from 'react';
import { observer } from 'mobx-react';
import {TagVM} from '@src/vm/tag/tagVM'

interface Props {
	tag: string;
}

@observer
export default class TagComponent extends React.Component<Props> {
	readonly vm = new TagVM();

	render() {
		return (
			<span onClick={() => {this.vm.handleTagComponentClick(this.props.tag)}} className="tag underlineHober">
				{this.props.tag}
			</span>
		)
	}
}