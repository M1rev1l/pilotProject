import * as React from 'react';
import { observer } from 'mobx-react';

interface Props {
	page: number;
	active?: boolean;
	onClick(page: number): void;
}

@observer
export default class PageComponent extends React.Component<Props> {
	readonly handleClick = () => {
		this.props.onClick(this.props.page);
	};

	render() {
		const {active, page} = this.props;
		const cn = `paginationList underlineHober ${active ? 'active' : ''}`;
		
		return (
			<li className={cn} onClick={this.handleClick}>
				<a className="paginationBtn">{page}</a>
			</li>
		);
	}
}