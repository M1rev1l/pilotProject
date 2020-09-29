import Tag from './Tag';
import TagListService from '@service/tagListService';

export default class TagList {
	render(){
		const renderTag = new Tag();
		const tagListService = new TagListService();

		const tagList = tagListService.getTagList();
		
		tagList.forEach(function(item: string) {
			renderTag.render(item);
		})
	}
}
