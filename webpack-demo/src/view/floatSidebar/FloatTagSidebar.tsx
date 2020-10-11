import * as React from 'react';
import TagList  from '@view/TagList/TagList';
import {TagListService} from '@service/tagListService';
import { computed } from 'mobx';

const tagListService = TagListService.instance;

export default class FloatTagSidebar extends React.Component {
	readonly box = React.createRef<HTMLElement>();

	windowScroll: number = window.scrollY;

	readonly handleWindowScroll = () => {
		this.windowScroll = window.scrollY;
	};

	@computed get boxStyle(): React.CSSProperties {
		return {
			transform: this.windowScroll > 300 
				? `translate(0, ${this.windowScroll - 300}px)`
				: 'translate(0, 0)'
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleWindowScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleWindowScroll);
	}

	render() {
		return (
			<aside className="tagBox" ref={this.box} style={this.boxStyle}>
				<div className="tagBoxTitle">
					Popular Tags
				</div>
				<TagList/>
			</aside>
		)
	}
}