import * as React from 'react';
import { observer } from 'mobx-react';
import {ArticleListService} from '@service/articleListService';
import {TagListService} from '@service/tagListService';

interface Props {
	tag: string;
}

const articleSerivce = ArticleListService.instance;
const tagService = TagListService.instance;
@observer
export default class TagComponent extends React.Component<Props> {
	readonly handleTagSelect = () => {
		tagService.selectedTag = this.props.tag;
		articleSerivce.initCurrentPage();
	};

	render() {
		return (
			<span onClick={this.handleTagSelect} className="tag underlineHober">
				{this.props.tag}
			</span>
		)
	}
}