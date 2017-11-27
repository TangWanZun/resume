	var raiuds = document.getElementsByClassName("fiexd-raiud");
	var INTO = false;
	var time1 = 0;
	var time2 = 0;
	var SF = {
		screenHeight:document.getElementsByClassName("mod")[0].scrollHeight,
		IDscroll:document.getElementById("scroll"),
		k:0,
		allk:8,
		translateY:0,
		onin:function(n){
			SF.k = n;
			SF.IDscroll.style.transform = "translateY("+(-n*SF.screenHeight)+"px)";
			for(var i = 0; i < SF.allk; i++) {
				raiuds[i].className = "fiexd-raiud";
			}
			raiuds[SF.k].classList.add("fiexd-raiud-in");
		}
	};
   var scrollFunc = function (e) {
	   	if(INTO){
	   		return;
	   	}
        var direct = 0;  
        e = e || window.event; 
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
				if(SF.k == 0) {
					return;
				}
				SF.k--;
				SF.onin(SF.k);
				INTO = true;
				time1 =setTimeout(function(){
					INTO=false;
					clearTimeout(time1);
				},1000);
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
				if(SF.k == SF.allk-1) {
					return;
				}
				SF.k++;
				SF.onin(SF.k);
				INTO = true;
				time2 = setTimeout(function() {
					INTO = false;
					clearTimeout(time2);
				}, 1000);
            }  

        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向下滚动时  
            	if(SF.k == SF.allk - 1) {
            		return;
            	}
            	SF.k++;
				SF.onin(SF.k);
            	INTO = true; 
            	time2 = setTimeout(function() {
            		INTO = false;
            		clearTimeout(time2);
            	}, 1000);
            }  
            if (e.detail< 0) { //当滑轮向上滚动时  
            	if(SF.k == 0) {
            		return;
            	}
            	SF.k--;
				SF.onin(SF.k);
            	INTO = true;
            	time1 = setTimeout(function() {
            		INTO = false;
            		clearTimeout(time1);
            	}, 1000);
            }  
        } 

    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  
    document.onmousewheel = scrollFunc; 
	//给侧面添加按钮功能
	var divarr = document.querySelectorAll(".fiexd-raiud");
	for(var i = 0 ;i<divarr.length; i++){
		(function(atme){
			divarr[i].onclick = function(){SF.onin(atme);}
		})(i);
	}
//	document.querySelectorAll(".fiexd-raiud").forEach(function(div,index){
//		div.onclick = function(){
//			SF.onin(index);
//		}
//	});
