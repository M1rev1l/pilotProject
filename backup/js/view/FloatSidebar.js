"use strict";
(function() {
	var render = function() {
		var htmlDom = document.querySelector("html");
		var sidebar = document.querySelector(".tagBox");
	
		var top = htmlDom.scrollTop;
	
		window.addEventListener("scroll", function() {
			top = htmlDom.scrollTop;
			var yPosition = top - 300;
			
			if(top >= 300) {
				sidebar.style.transform = "translate(0," + yPosition +"px)";
			} else {
				sidebar.style.transform = "translate(0, 0)";
			}
		})
		
		//새로고침 처리
		if(top >= 300) {
			var yPosition = top - 300;
	
			sidebar.style.transform = "translate(0," + yPosition +"px)";
		}
	}

	window['FLOAT_SIDEBAR'] = {
		render: render
	}
})();