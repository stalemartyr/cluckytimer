		
			var timerworker = new Worker("./script/timer.js");
			var active = 0;
			var initial1,initialmm,initialss;
			
			window.onload = function(){
				var start = document.getElementById("start");
				var stop = document.getElementById("stop");
				var resume = document.getElementById("resume");
				var reset = document.getElementById("reset");
				var log = document.getElementById("log");
				var logger = document.getElementById("logger");
				
				var hh_up =  document.getElementById("hh_up");
				var hh_down =  document.getElementById("hh_down");
				var mm_up =  document.getElementById("mm_up");
				var mm_down =  document.getElementById("mm_down");
				var ss_up =  document.getElementById("ss_up");
				var ss_down =  document.getElementById("ss_down");
				
				var swipe_ss = document.getElementById("ss_swipe");
				var swipe_mm = document.getElementById("mm_swipe");
				var swipe_hh = document.getElementById("hh_swipe");
				//navigation
				
				initial1 = parseInt(document.getElementById("h1").innerHTML + document.getElementById("h2").innerHTML);
				initialmm = parseInt(document.getElementById("m1").innerHTML + document.getElementById("m2").innerHTML);
				initialss = parseInt(document.getElementById("s1").innerHTML + document.getElementById("s2").innerHTML);
				
				
				var ssY1,ssY2,movedss = false;
				swipe_ss.addEventListener("touchstart",function(evt){
					ssY1 = evt.touches[0].pageY;
				},false);
				swipe_ss.addEventListener("touchmove",function(evt){
					ssY2 = evt.touches[0].pageY;
					movedss = true;
				},false);
				swipe_ss.addEventListener("touchend",function(){
					var evaluate = parseInt(ssY1) - parseInt(ssY2);
					if(movedss){
						if(evaluate > 30){
							upSS();
						}else if(evaluate < -30){
							downSS();
						}
					}
				},false);
				
				var mmY1,mmY2,movedmm = false;
				swipe_mm.addEventListener("touchstart",function(evt){
					mmY1 = evt.touches[0].pageY;
				},false);
				swipe_mm.addEventListener("touchmove",function(evt){
					mmY2 = evt.touches[0].pageY;
					movedmm = true;
				},false);
				swipe_mm.addEventListener("touchend",function(){
					var evaluate = parseInt(mmY1) - parseInt(mmY2);
					if(movedmm){
						if(evaluate > 30){
							upMM();
						}else if(evaluate < -30){
							downMM();
						}
					}
					mmY1 = 0;
					mmY2 = 0;
					movedmm = false;
				},false);
				
				var hhY1,hhY2,movedhh = false;
				swipe_hh.addEventListener("touchstart",function(evt){
					hhY1 = evt.touches[0].pageY;
				},false);
				
				swipe_hh.addEventListener("touchmove",function(evt){
				  movedhh = true;
					hhY2 = evt.touches[0].pageY;
				},false);
				swipe_hh.addEventListener("touchend",function(){
					var evaluate = parseInt(hhY1) - parseInt(hhY2);
					if(movedhh){
						if(evaluate > 30){
							upHH();
						}else if(evaluate < -30){
							downHH();
						}
					}
					hhY1 = 0;
					hhY2 = 0;
					movedhh = false;
				},false);
				
				//clicks
				var arrowmoved = false;
				hh_up.ontouchstart = function(){}
				hh_up.ontouchmove = function(){
					arrowmoved = true;
				}
				hh_up.ontouchend = function(e){
					if(!arrowmoved){
						e.stopPropagation();
						upHH();
						return false;
					}else{
						arrowmoved = false;
					}
				}
				
				
				hh_down.ontouchstart = function(e){}
				hh_down.ontouchmove = function(){
					arrowmoved = true;
				}
				hh_down.ontouchend = function(e){
					if(!arrowmoved){
						e.stopPropagation();
						downHH();
						return false;
					}else{
						arrowmoved = false;
					}
				}
				
				mm_up.ontouchstart = function(e){}
				mm_up.ontouchmove = function(){
					arrowmoved = true;
				}
				mm_up.ontouchend = function(e){
					if(!arrowmoved){
						e.stopPropagation();
						upMM();
						return false;
					}else{
						arrowmoved = false;
					}
				}
				
				mm_down.ontouchstart = function(e){}
				mm_down.ontouchmove = function(){
					arrowmoved = true;
				}
				mm_down.ontouchend = function(e){
					if(!arrowmoved){
						e.stopPropagation();
						downMM();
						return false;
					}else{
						arrowmoved = false;
					}
				}
				
				ss_up.ontouchstart = function(e){}
				ss_up.ontouchmove = function(){
					arrowmoved = true;
				}
				ss_up.ontouchend = function(e){
					if(!arrowmoved){
						e.stopPropagation();
						upSS();
						return false;
					}else{
						arrowmoved = false;
					}
				}
				
				ss_down.ontouchstart = function(e){}
				ss_down.ontouchmove = function(){
					arrowmoved = true;
				}
				ss_down.ontouchend = function(e){
					if(!arrowmoved){
						e.stopPropagation();
						downSS();
						return false;
					}else{
						arrowmoved = false;
					}
				}
				
				function upHH(){
					if(initial1 < 23){
						initial1++;
						if(initial1.toString().length == 2){
							var hh = initial1.toString().split("");
						}else{
							var hh = "0" + initial1;
							var hh = hh.split("");
						}
					document.getElementById("h1").innerHTML = hh[0];
					document.getElementById("h2").innerHTML = hh[1];
					}
				}
				
				function downHH(){
				
					if(initial1 > 0){
						initial1--;
						if(initial1.toString().length == 2){
							var hh = initial1.toString().split("");
						}else{
							var hh = "0" + initial1.toString();
							var hh = hh.split("");
						}
					document.getElementById("h1").innerHTML = hh[0];
					document.getElementById("h2").innerHTML = hh[1];
					}
				}
				
				

				function upMM(){
					
					if(initialmm < 59){
						initialmm++;
						if(initialmm.toString().length == 2){
							var mm = initialmm.toString().split("");
						}else{
							var mm = "0" + initialmm.toString();
							var mm = mm.split("");
						}
					document.getElementById("m1").innerHTML = mm[0];
					document.getElementById("m2").innerHTML = mm[1];
					}
				
				}
				
				function downMM(){
				
					if(initialmm > 0){
						initialmm--;
						if(initialmm.toString().length == 2){
							var mm = initialmm.toString().split("");
						}else{
							var mm = "0" + initialmm.toString();
							var mm = mm.split("");
						}
					document.getElementById("m1").innerHTML = mm[0];
					document.getElementById("m2").innerHTML = mm[1];
					}
					
				}
				
				
				function upSS(){
				
					if(initialss < 59){
						initialss++;
						if(initialss.toString().length == 2){
							var ss = initialss.toString().split("");
						}else{
							var ss = "0" + initialss.toString();
							var ss = ss.split("");
						}
					document.getElementById("s1").innerHTML = ss[0];
					document.getElementById("s2").innerHTML = ss[1];
					}
					
				}
				
				function downSS(){
					if(initialss > 0){
						initialss--;
						if(initialss.toString().length == 2){
							var ss = initialss.toString().split("");
						}else{
							var ss = "0" + initialss.toString();
							var ss = ss.split("");
						}
					document.getElementById("s1").innerHTML = ss[0];
					document.getElementById("s2").innerHTML = ss[1];
					}
				}
				//end
				logger.style.height = (window.innerHeight - 250) + "px";
				
				start.ontouchstart = function(){
					var trigger = initial1+initialmm+initialss;
					
					if(parseInt(trigger) == 0){
						startCount({action:"start"});
					}else{
						startCount({action:"down",whh:initial1,wmm:initialmm,wss:initialss});
					}
					start.style.display = "none";
					reset.style.display = "none";
					stop.style.display = "block";
					log.style.display = "block";
					active = 1;
				}
				
				stop.ontouchstart = function(){
					timerworker.postMessage({action:"pause"});
					stop.style.display = "none"; 
					log.style.display = "none"; 
					resume.style.display = "block";
					reset.style.display = "block";
					active = 0;
				}
				
				reset.ontouchstart = function(){
					document.getElementById("ms").innerHTML = "00";
					document.getElementById("s2").innerHTML = 0;
					document.getElementById("s1").innerHTML = 0;
					document.getElementById("m2").innerHTML = 0;
					document.getElementById("m1").innerHTML = 0;
					document.getElementById("h2").innerHTML = 0;
					document.getElementById("h1").innerHTML = 0;
					
					timerworker.postMessage("reset");
					logger.innerHTML = "";
					resume.style.display = "none";
					start.style.display = "block";
					initial1 = "00";
					initialmm = "00";
					initialss = "00";
					active = 0;
				}
				
				resume.ontouchstart = function(){
					timerworker.postMessage({action:"resume"});
					stop.style.display = "block"; 
					log.style.display = "block"; 
					resume.style.display = "none";
					reset.style.display = "none";
					active = 1;
				}
				
				log.ontouchstart= function(){
					var ms = document.getElementById("ms").innerHTML;
					var s1 = document.getElementById("s2").innerHTML;
					var s2 = document.getElementById("s1").innerHTML;
					var m1 = document.getElementById("m2").innerHTML;
					var m2 = document.getElementById("m1").innerHTML;
					var h1 = document.getElementById("h2").innerHTML;
					var h2 = document.getElementById("h1").innerHTML;
					
					logger.innerHTML  += "<div class='logs'>"+h2+h1+":"+m2+m1+":"+s2+s1+":"+ms+"</div>";
					
					
				}
				
				document.addEventListener("visibilitychange",function(){
					if(document.hidden){
						if(active){
							notifyMe("cLucky is still active :-)");
						}
					}			
				});
				
			}
			
			function startCount(mess){
				try{
					timerworker.postMessage(mess);
					timerworker.onmessage = function(evt){
					
						document.getElementById("ms").innerHTML = evt.data["ms"];
						document.getElementById("s2").innerHTML = evt.data["sec1"];
						document.getElementById("s1").innerHTML = evt.data["sec2"];
						document.getElementById("m2").innerHTML = evt.data["min1"];
						document.getElementById("m1").innerHTML = evt.data["min2"];
						document.getElementById("h2").innerHTML = evt.data["hrs1"];
						document.getElementById("h1").innerHTML = evt.data["hrs2"];
						
						if(typeof evt.data.action !== "undefined"){
							if(evt.data.action == "timesup"){
								var start = document.getElementById("start");
								var stop = document.getElementById("stop");
								var resume = document.getElementById("resume");
								var reset = document.getElementById("reset");
								var log = document.getElementById("log");
								var logger = document.getElementById("logger");
								initial1 = "00";
								initialmm = "00";
								initialss = "00";
								stop.style.display = "none";
								log.style.display = "none";
								resume.style.display = "none";
								reset.style.display = "none";
								start.style.display = "block";
								var timenow = new Date();
								notifyMe("Time is up!!!!");
								active = false;
							}
						}
						
					}
				}catch(e){
					alert(e);
				}
			}
			///burr
			
			
			window.onresize = function(){
					var logger = document.getElementById("logger");
					logger.style.height = (window.innerHeight - 250) + "px";
			}
			
			function notifyMe(message) {
				var notification = navigator.mozNotification;
				
				if(typeof notification !== "undefined"){
					var n = notification.createNotification("cLucky", message);
					n.onclick = function(){
						window.focus();
					}
					n.show();
				}else{
					var notification = new Notification(message);
					notification.onclick = function(){
						window.focus();
					}
				}
			}
