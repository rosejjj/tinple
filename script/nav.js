

var fram_width = Number(window.screen.width),
	fram_height = Number(window.screen.height);
function openNav(){//打开导航
	api.openFrame({
	    name: 'openNav',
	    url: 'widget://html/nav/openNav.html',
	    rect: {
	        x: fram_width - fram_width*0.063 - 45,
	        y: fram_height - 100,
	        w: 60,
	        h: 60
	    },
	    pageParam: {
	        name: 'test'
	    }
	});
	//一秒后--层级置顶
	setTimeout(function(){
		api.bringFrameToFront({
		    from: 'openNav'
		});
	},1000);
}
function openHead(head_Information){//打开头部
	api.openFrame({
	    name: 'head',
	    url: 'widget://html/nav/head.html',
	    rect: {
	        x: 0,
	        y: 0,
	        w: fram_width,
	        h: fram_width * 0.2133
	    },
	    pageParam: {
	        head_Information: head_Information
	    }
	});
	//一秒后--层级置顶
	setTimeout(function(){
		api.bringFrameToFront({
		    from: 'head'
		});
	},5000);
}
function head_fram_dosomething(location){
	switch(location){
		case 'left': var jsfun = "nav_list('left')"; break;
		case 'center' : var jsfun = "nav_list('center')"; break;
		case 'right' : var jsfun = "nav_list('right')"; break;
		default: ;
	}
//	if(location == 'left'){
//
//	}else if(location == 'center'){
//		var jsfun = "nav_list('center')";
//	}else{
//		var jsfun = "nav_list('right')";
//	}
	//当前指向win的操作
	api.execScript({
	    frameName: 'head',
	    script: jsfun
	});
}
