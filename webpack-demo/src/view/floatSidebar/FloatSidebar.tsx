import * as React from 'react';
import TagList  from '@view/TagList/TagList';

interface Props {
	tagList: ReadonlyArray<string>
}

export default class FloatSidebar extends React.Component<Props> {
	componentDidMount() {
		const htmlDom: HTMLElement = document.querySelector("html");
		const sidebar: HTMLElement = document.querySelector(".tagBox");
	
		let top: number = htmlDom.scrollTop;
	
		window.addEventListener("scroll", function() {
			top = htmlDom.scrollTop;
			let yPosition: number = top - 300;
			
			if(top >= 300) {
				sidebar.style.transform = "translate(0," + yPosition +"px)";
			} else {
				sidebar.style.transform = "translate(0, 0)";
			}
		})
		
		//새로고침 처리
		if(top >= 300) {
			const refreshYPosition: number = top - 300;
	
			sidebar.style.transform = "translate(0," + refreshYPosition +"px)";
		}
	}
	render() {
		return (
			<aside className="tagBox">
				<div className="tagBoxTitle">
					Popular Tags
				</div>
				<TagList tagList={this.props.tagList}/>
			</aside>
		)
	}
}