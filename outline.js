/*! outline.js v1.2.0 - https://github.com/lindsayevans/outline.js/ */
(function(d){

	var style_element = d.createElement('STYLE'),
	    dom_events = 'addEventListener' in d,
	    add_event_listener = function(type, callback){
			// Basic cross-browser event handling
			if(dom_events){
				d.addEventListener(type, callback);
			}else{
				d.attachEvent('on' + type, callback);
			}
		},
	    set_css = function(css_text){
			// Handle setting of <style> element contents in IE8
			!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
		}
	;

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	add_event_listener('mousedown', function(){
		set_css(':focus{outline:0 !important;box-shadow: none !important;}:focus-within{outline:0 !important;box-shadow: none !important;}::-moz-focus-inner{border:0 !important;}input:focus~label[class*="focused-label"]{outline:0 !important;box-shadow:none !important;');
	});

	add_event_listener('keydown', function(){
		set_css('');
	});

})(document);
