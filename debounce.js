module.exports = debounce
function debounce(fn,delay,immediately){
	var timer,args,context,result;

	function debounced(){
		context = this;
		args = arguments;

		timer && clearTimeout(timer);
		if(immediately){
			var callNow = !time;
			timer = setTimeout(function(){
				timer = null
			},delay);
			if(callNow){
				result = fn.apply(context,args)
			}
		}else{
			timer = setTimeout(function(){
				result = fn.apply(context,args)
			},delay)
		}
		return result;
	}
	debounced.clear = function(){
		clearTimeout(timer)
		timer = null
	}
	return debounced;
}