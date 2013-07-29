(function($) {

    $.widget("ui.imageframer", {
		options: {
			borderColor: "pink",
			color: "#fff",
			backgroundColor: "pink",
			width: "200px"
		},
				
		_create: function() {
			var self = this,
			divElement = self.element,
			options = self.options;
			divElement.css({
				"border-color": options.borderColor,
				"border-style": "solid",
				"border-width": "2px",
				"display":"block",
				"width": options.width});

			var $img = divElement.children("img");
			$img.css({'width':options.width});
			cap = $("<span></span>").text($img.attr("alt")).css({
				"backgroundColor":options.backgroundColor,
				"color":options.color,
				display:"block"
			}).insertAfter($img);
		},

		destroy: function(imgHeight) {
			var $divElement = this.element,
			$img = $divElement.children("img");
			$divElement.children("span").remove();
			$divElement.css({"border":"", "width":imgHeight});
			$img.css("width", imgHeight);
		},
				
	});
})(jQuery);