var ms = 0;
var sec = 0;
var min = 0;
var hrs = 0;
var type;
self.onmessage = function(evt){
		

		var timer = new Object();
		
	if(evt.data.action == "start"){
	timer_id = setInterval(go,10);
	type = "asc";
	}
	if(evt.data.action == "down"){
	sec = parseInt(evt.data.wss);
	min = parseInt(evt.data.wmm);
	hrs = parseInt(evt.data.whh);
	timer_id = setInterval(less,10);
	type = "desc";
	}
	if(evt.data.action == "pause"){
	//clearInterval(timer_id);
	clearInterval(timer_id);
	}
	if(evt.data.action == "resume"){
		if(type == "asc"){
			timer_id = setInterval(go,10);
			type = "asc";
		}else{
			timer_id = setInterval(less,10);
			type = "desc";
		}
	}
	if(evt.data == "reset"){
		clearInterval(timer_id);
		ms = 0;
		sec = 0;
		min = 0;
		hrs = 0;
		type = '';
	}
	
	function go(){
		if(ms.toString().length == 1){
			ms1 = "0" + ms;
		}else{
			ms1 = ms.toString();
		}
		
		if(sec.toString().length == 1){
			sec1 = "0" + sec;
			sec1 = sec1.split("");
		}else{
			sec1 = sec.toString().split("");
		}
		
		if(min.toString().length == 1){
			min1 = "0" + min;
			min1 = min1.split("");
		}else{
			min1 = min.toString().split("");
		}
		
		if(hrs.toString().length == 1){
			hrs1 = "0" + hrs;
			hrs1 = hrs1.split("");
		}else{
			hrs1 = hrs.toString().split("");
		}
		
		timer["ms"] = ms1;
		timer["sec1"] = sec1[1];
		timer["sec2"] = sec1[0]
		timer["min1"] = min1[1];
		timer["min2"] = min1[0];
		timer["hrs1"] = hrs1[1];
		timer["hrs2"] = hrs1[0];
		
		postMessage(timer);
		
		ms++;
		
		if(ms > 99){
		
			sec++;
			ms = 0;
		}
		
		if(sec > 59){
			min++;
			sec = 0;
		}
		
		if(min > 59){
			hrs++;
			min = 0;
		}
		
		if(hrs > 23){
			hrs = 0;
		}
		
	}
	
	function less(){
		if(ms.toString().length == 1){
			ms1 = "0" + ms;
		}else{
			ms1 = ms.toString();
		}
		
		if(sec.toString().length == 1){
			sec1 = "0" + sec;
			sec1 = sec1.split("");
		}else{
			sec1 = sec.toString().split("");
		}
		
		if(min.toString().length == 1){
			min1 = "0" + min;
			min1 = min1.split("");
		}else{
			min1 = min.toString().split("");
		}
		
		if(hrs.toString().length == 1){
			hrs1 = "0" + hrs;
			hrs1 = hrs1.split("");
		}else{
			hrs1 = hrs.toString().split("");
		}
		
		if(sec == 0 && min == 0 && hrs == 0){
			//timesup
			clearInterval(timer_id);
			timer["action"] = "timesup";
			timer["ms"] = "00";
			timer["sec1"] = 0;
			timer["sec2"] = 0;
			timer["min1"] = 0;
			timer["min2"] = 0;
			timer["hrs1"] = 0;
			timer["hrs2"] = 0;
			postMessage(timer);
			sec= 0;
			min = 0;
			hrs = 0;
		}else{
			ms--;
			
			timer["ms"] = ms1;
			timer["sec1"] = sec1[1];
			timer["sec2"] = sec1[0]
			timer["min1"] = min1[1];
			timer["min2"] = min1[0];
			timer["hrs1"] = hrs1[1];
			timer["hrs2"] = hrs1[0];
			
			postMessage(timer);
		}
		

		
		

		
		if(ms < 0){
		
			sec--;
			ms = 99;
		}
		
		if(sec < 0){
			min--;
			sec = 59;
		}
		
		if(min < 0){
			hrs--;
			min = 59;
		}
		
		if(hrs < 0){
			hrs = 0;
		}
		
	}
}
