"use strict";
(function() {
    var render = function(type, data) {
        if(type == "article") {
            var tag = [];
            data.tag.forEach(function(item) {
                tag.push(item);
            })
            alert("writer: " + data.writer + "\ndate: " + data.date + "\ntitle: " + data.title + "\ndescription: " + data.description + "\ntag: " + tag);
        } else if(type == "tag") {
            alert("tag : " + data);
        } else if(type == "page") {
            alert("page : " + data);
        }
    }

    window['CLICK_EVENT_HANDLER'] = {
		render: render
	};
})();