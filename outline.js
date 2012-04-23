(function(d){

	var style_element = d.createElement('STYLE');
	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	d.onmousedown = function(){
		style_element.innerHTML = 'a{outline:none}';
	};

	d.onkeydown = function(){
		style_element.innerHTML = '';
	};


})(document);
