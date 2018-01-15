	var raiuds = document.getElementsByClassName("fiexd-raiud");
	var INTO = false;
	var time1 = 0;
	var time2 = 0;
	//竖向移动
	var SF = {
		screenHeight:document.getElementsByClassName("mod")[0].scrollHeight,
		IDscroll:document.getElementById("scroll"),
		k:0,
		allk:4,
		translateY:0,
		onin:function(n){
			SF.k = n;
			SF.IDscroll.style.transform = "translateY("+(-n*SF.screenHeight)+"px)";
			for(var i = 0; i < SF.allk; i++) {
				raiuds[i].className = "fiexd-raiud";
			}
			raiuds[SF.k].classList.add("fiexd-raiud-in");
			
			if(document.querySelector(".fiexd-right").style.display == "none"){
				document.querySelector(".fiexd-right").style.display = "block";
			};
			//当处于产品演示页面时，隐藏侧边按钮栏
			if(SF.k == 2) {
				document.querySelector(".fiexd-right").style.display = "none";
			}
		}
	};
	//横向移动
	var HF = {
		scrollWidth: document.querySelector(".mod").scrollWidth,
		IDscroll: document.querySelector(".mod-box"),
		k: 0,
		allk: document.querySelectorAll(".mod-HF").length-1,
		translateX: 0,
		onin: function(n) {
			HF.k = n;
			HF.IDscroll.style.transform = "translateX(" + (-n * HF.scrollWidth) + "px)";
		}
	};
	function HFShow(index){
		switch(index){
			case 0:{
				if(HF.k<=0){HF.k = HF.allk}
				HF.k--;
				HF.onin(HF.k);
				break;
			}
			case 1:{
				if(HF.k >= HF.allk-1) {HF.k = -1}
				HF.k++;
				HF.onin(HF.k);
				break;
			}
		}
	}
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
