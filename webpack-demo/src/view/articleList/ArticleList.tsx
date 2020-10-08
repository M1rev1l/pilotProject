import * as React from "react";
import { observer } from "mobx-react";
import Article from '@view/articleList/Article';
import { ArticleListVM } from "@src/vm/article/articleListVM";

@observer
export default class ArticleList extends React.Component {
	readonly vm = new ArticleListVM();

	// disposer, autorun 
	// disposer: Disposer = null;

	// componentDidMount() {
	// 	this.disposer = autorun(() => {
	// 		console.log(`길이 : ${service.currentArticleList.length}`)
	// 	});
	// }

	// componentWillUnmount() {
	// 	this.disposer();
	// }

	render() {
		if (this.vm.isEmpty) {
			return <div></div>;
		}
		
		return this.vm.itemVMList.map((itemVM, index) => (
			<li className="article" key={index}>
				<Article itemVM={itemVM}/>
			</li>
		));
	}
}