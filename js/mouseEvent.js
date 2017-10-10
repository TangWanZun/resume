	var raiuds = document.getElementsByClassName("fiexd-raiud");
	var INTO = false;
	var time1 = 0;
	var time2 = 0;
	var SF = {
		screenHeight:document.getElementsByClassName("mod")[0].scrollHeight,
		IDscroll:document.getElementById("scroll"),
		k:0,
		allk:6,
		translateY:0,
		onup:function(){
			SF.translateY += SF.screenHeight;
			SF.IDscroll.style.transform = "translateY("+SF.translateY+"px)";
		},
		ondown:function(){
			SF.translateY -= SF.screenHeight;
			SF.IDscroll.style.transform = "translateY("+SF.translateY+"px)";
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
//              alert("滑轮向上滚动1");
				if(SF.k == 0) {
					return;
				}
				SF.onup();
				SF.k--;
				INTO = true;
				time1 =setTimeout(function(){
					INTO=false;
					clearTimeout(time1);
				},1000);
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
//              alert("滑轮向下滚动1"); 
				if(SF.k == SF.allk-1) {
					return;
				}
				SF.ondown();
				SF.k++;
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
            	SF.ondown();
            	SF.k++;
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
            	SF.onup();
            	SF.k--;
            	INTO = true;
            	time1 = setTimeout(function() {
            		INTO = false;
            		clearTimeout(time1);
            	}, 1000);
            }  
        } 
        for(var i = 0; i < SF.allk; i++) {
        	raiuds[i].className = "fiexd-raiud";
        }
        raiuds[SF.k].classList.add("fiexd-raiud-in");
    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  
//  window.onmousewheel = document.onmousewheel = scrollFunc;  
    document.onmousewheel = scrollFunc; 
