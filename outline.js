// outline.js
// based on http://www.paciellogroup.com/blog/2012/04/how-to-remove-css-outlines-in-an-accessible-manner/
(function(d){

	var style_element = d.createElement('STYLE');
	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	d.onmousedown = function(){
		style_element.innerHTML = 'a{outline:none}';
	};

	d.onkeydown = function(){
		style_element.innerHTML = '';
	};


})(document);
