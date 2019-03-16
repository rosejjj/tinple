
//退出win
function closeWin() {
	api.closeWin({
		animation: {
			type: "push", //动画类型（详见动画类型常量）
			subType: "from_left", //动画子类型（详见动画子类型常量）
			duration: 300 //动画过渡时间，默认300毫秒
		}
	});
}

//右滑退出
function swipeRight() {
	api.addEventListener({
		name: 'swiperight'
	}, function() {
		api.closeWin({
			animation: {
				type: "push", //动画类型（详见动画类型常量）
				subType: "from_left", //动画子类型（详见动画子类型常量）
				duration: 300 //动画过渡时间，默认300毫秒
			}
		});
	});
}

//获取时间
function getRefreshTime() {
	var myDate = new Date();
	var year = myDate.getFullYear(),
		month = myDate.getMonth() + 1 > 9 ? myDate.getMonth() + 1 : '0' + (myDate.getMonth() + 1),
		currentDate = myDate.getDate() > 9 ? myDate.getDate() : '0' + myDate.getDate(),
		hours = myDate.getHours() > 9 ? myDate.getHours() : '0' + myDate.getHours(),
		minutes = myDate.getMinutes() > 9 ? myDate.getMinutes() : '0' + myDate.getMinutes(),
		seconds = myDate.getSeconds() > 9 ? myDate.getSeconds() : '0' + myDate.getSeconds(),
		currentTime = year + '-' + month + '-' + currentDate + ' ' + hours + ':' + minutes + ':' + seconds;
	return currentTime;
}
//取整
function getIndentation(count) {
	if(count < 1000 && count >= 0) {
		return count;
	} else if(count < 10000) {
		return(count / 1000).toFixed(1) + 'k';
	} else if(count < 1000000) {
		return parseInt(count / 1000) + 'k';
	} else if(count < 10000000) {
		return(count / 1000000).toFixed(1) + 'm';
	} else if(count < 1000000000) {
		return parseInt(count / 1000000) + 'm';
	} else if(count < 10000000000) {
		return(count / 1000000000).toFixed(1) + 'b';
	} else if(count < 1000000000000) {
		return parseInt(count / 1000000000) + 'b';
	}

}

//主页页面退出app--只是退出并没有关闭
function closeWidget(){
	api.addEventListener({
	    name: 'keyback'
	}, function(ret, err) {
		var winName = api.winName;
		if(winName == 'chat_index' || winName == 'home' || winName =='setup' || winName == 'search' || winName == 'funtionlist')
//		关闭应用
//	    api.closeWidget({
//		    id: 'A6925336051394',
//		    retData: {
//		        name: 'closeWidget'
//		    },
//		    silent : true,//退出时不弹出提示框
//		    animation: {
//		        type: 'flip',
//		        subType: 'from_bottom',
//		        duration: 500
//		    }
//		});

		//回到桌面
		api.toLauncher();
	});
}
//状态栏
function fullScreen(){
	//显示状态栏
	setTimeout(function() {
		api.setFullScreen({
			fullScreen: false
		});
	}, 1);
	//状态栏透明
	api.setStatusBarStyle({
	    style: 'dark',
	    color: ''
	});
}
///切换win
function enterWin(name, path, param1, param2, param3, param4) {
	guideEnterAnimated(name);
	if(path.indexOf('http') == -1){
		path = router['widget'] + path;
	}
	api.openWin({
		name: name,
		url: path,
		slidBackEnabled: false,
		animation: {
			type: "fade", //动画类型（详见动画类型常量）
			subType: "fade", //动画子类型（详见动画子类型常量）
			duration: 250 //动画过渡时间，默认300毫秒
		},
		pageParam: {
			param1: param1,
			param2: param2,
			param3: param3,
			param4: param4
		}
	})
	fullScreen();
}
//进入个人主页（他人）
function openPersonal(name,targetId){

	path = router['widget'] + router['home'];
	api.openWin({
		name: name + new Date(),
		url: path,
		slidBackEnabled: false,
		animation: {
			type: "fade", //动画类型（详见动画类型常量）
			subType: "fade", //动画子类型（详见动画子类型常量）
			duration: 250 //动画过渡时间，默认300毫秒
		},
		pageParam: {
			otherId:targetId
		}
	})
}

//主导航进入动画
function guideEnterAnimated(name) {
	if($api.dom('.enterAnimated')) {
		$api.removeCls($api.dom('.enterAnimated'), 'pulse');
		api.sendEvent({
			name: name
		});
	}

}
//添加单聊历史消息到数据库中  数据库轻量级数据库 sqlite
function insermessage(msg,db,sate){ //msg 获取的消息数组 db 数据库调用模块的对象  sate 消息加入的数据表 1或没有代表加入的是单聊表tin_im_message  2代表是群表tin_im_Gmessage
	// alert(JSON.stringify(msg[0]));
	  var aa=new Date();
	db.transaction({
					name: 'tinkle',
					operation: 'begin'
			}, function(ret, err) {
					if (ret.status) {

					} else {
							// alert(JSON.stringify(err));
					}
			});
				// alert(JSON.stringify(msg[0]));
	for(var i=0;i<msg.length;i++){
		// console.log("**********"+JSON.stringify(msg[i].msg_body));
	// (function(i){
				var createTime=msg[i].create_time,   //消息到达服务器的时间
						// create_date=createTime.toString().substring(0,10), //10位时间戳，等下用来转换成sqlite中的日期
						msg_body=JSON.stringify(msg[i].msg_body).replace(/'/g,"&prime;"),//把带引号转成特殊字符号
						userid=$api.getStorage("id"),
						fromId=msg[i].from_id,
						fromPlatform=msg[i].from_platform,
						targetType=msg[i].target_type,
						targetId=msg[i].target_id,
						version=msg[i].version,
						type=msg[i].msg_body.extras.type,
						// text=msg[i].msg_body.text,
						text=msg[i].msg_body.text.replace(/'/g,"&prime;"),

						msgType=msg[i].msg_type,
						msgId=msg[i].msgid,
            ctime_ms=msg[i].msg_ctime;
							// alert(JSON.stringify(text));
				// var create_date=new Date();
				// alert(JSON.stringify(msg));
					if(sate == 2){
						// ctime_ms=msg[i].msg_ctime; //消息的创建时间
								db.executeSql({  //添加到群聊列表
										name: 'tinkle',
										sql: "insert INTO tin_im_Gmessage(gid,msg_body,create_time,ctime_ms,from_id,from_platform,target_type,target_id,version,type,text,msg_type,msg_id) VALUES('"+targetId+"','"+msg_body+"','"+createTime+"','"+ctime_ms+"','"+fromId+"','"+fromPlatform+"','"+targetType+"','"+targetId+"','"+version+"','"+type+"','"+text+"','"+msgType+"','"+msgId+"')"
								}, function(ret, err){
										if( ret.status ){
												// console.log("成功"+i);
										}else{
												console.log("失败"+i+"**************"+JSON.stringify(err));
												// alert(JSON.stringify(err));
										}
								});


						}else{
								db.executeSql({ //加到单聊表中
										name: 'tinkle',
										sql: "insert INTO tin_im_message(userid,msg_body,create_time,ctime_ms,from_id,from_platform,target_type,target_id,version,type,text,msg_type,msg_id) VALUES('"+userid+"','"+msg_body+"','"+createTime+"','"+ctime_ms+"','"+fromId+"','"+fromPlatform+"','"+targetType+"','"+targetId+"','"+version+"','"+type+"','"+text+"','"+msgType+"','"+msgId+"')"
								}, function(ret, err){
										if( ret.status ){
												// console.log("成功"+i);
										}else{
												console.log("失败"+i+"**************"+JSON.stringify(err));
												// alert(JSON.stringify(err));
										}
								});

						}
		// })(i)
	}
	db.transaction({
					name: 'tinkle',
					operation: 'commit'
			}, function(ret, err) {
					if (ret.status) {
							// alert(JSON.stringify(ret));
					} else {
							// alert(JSON.stringify(err));
					}
			});
	   console.log("HHHHHHHHHH数据库存入信息条数:::::::::::::::::::::::"+msg.length+"所需的时间:::::::::::::::::::::"+(new Date()-aa));
};

  function openDb(db){
		//打开数据库查看是否有这些表没有就创建表
		//可在数据库管理工具中打开sqlite数据库
		//select *, datetime(SUBSTR(create_time,1,10), 'unixepoch', 'localtime') as date from tin_im_message order by date desc
					db.openDatabase({
											name: 'tinkle',
											// path: 'widget://tinkle.db'
									}, function(ret, err) {
									  // alert(JSON.stringify(ret));

											if (ret.status) {
												//没有表时创建评论等的回响echo表
															console.log("打开数据库成功...");
															db.executeSql({
															 name: 'tinkle',
															 sql: "CREATE TABLE IF NOT EXISTS `echo`(id  VARCHAR(40) NOT NULL,uuid varchar(40) NOT NULL, avatar_url varchar(255) default NULL,	cover_url varchar(255) default Null, contentText varchar(1000) default NULL, 	current varchar(255) default NULL, 	nickname varchar(255) default NULL, topicId varchar(40) default NULL, type varchar(30) default NUll,post_type varchar(30) default Null)"
													 }, function(ret, err) {
														 console.log(JSON.stringify(ret));
															 if (ret.status) {
																		console.log("回响表创建或存在表成功...");
															 } else {
																	 console.log("创建或存在表失败...");
															 }
													 });


													//用于删除某张表
													//  db.executeSql({
													//      name: 'tinkle',
													//      sql: 'drop table tin_im_Gmessage'
													//  }, function(ret, err){
													//      if( ret.status ){
													//          alert("成功");
													//      }else{
													//          alert("失败");
													//      }
													//  });

													//  创建d单聊聊天消息表
																	db.executeSql({
																			name: 'tinkle',
																			sql: "create table if not EXISTS tin_im_message (userid varchar(36) NOT NULL,msg_body varchar(10000) DEFAULT NULL,create_time varchar(20) DEFAULT NULL,ctime_ms varchar(20) DEFAULT NULL,from_id varchar(36) DEFAULT NULL,from_platform varchar(36) DEFAULT NULL,target_type varchar(10) DEFAULT NULL,target_id varchar(36) DEFAULT NULL,version varchar(20) DEFAULT NULL,type varchar(20) DEFAULT NULL,text varchar(10000) DEFAULT NULL,msg_type varchar(20) DEFAULT NULL,msg_id varchar(30) DEFAULT NULL,PRIMARY KEY (msg_id))"
																	}, function(ret, err){
																			if( ret.status ){
																				 console.log("聊天消息表创建或存在表    成功...");
																			}else{
																			 //  console.log(JSON.stringify(err));
																					console.log("聊天消息表创建或存在表   失败...");
																			}
																	});
												// 创建群聊消息表
																	db.executeSql({
																			name: 'tinkle',
																			sql: "create table if not EXISTS tin_im_Gmessage (gid varchar(36) NOT NULL,msg_body varchar(10000) DEFAULT NULL,create_time varchar(20) DEFAULT NULL,ctime_ms varchar(20) DEFAULT NULL,from_id varchar(36) DEFAULT NULL,from_platform varchar(36) DEFAULT NULL,target_type varchar(10) DEFAULT NULL,target_id varchar(36) DEFAULT NULL,version varchar(20) DEFAULT NULL,type varchar(20) DEFAULT NULL,text varchar(10000) DEFAULT NULL,msg_type varchar(20) DEFAULT NULL,msg_id varchar(30) DEFAULT NULL,PRIMARY KEY (msg_id))"
																	}, function(ret, err){
																			if( ret.status ){
																				 console.log("群聊====聊天消息表创建或存在表    成功...");
																			}else{
																			 //  console.log(JSON.stringify(err));
																					console.log("群聊===聊天消息表创建或存在表   失败...");
																			}
																	});
											//创建进入群组的时间表
																 db.executeSql({
																		 name: 'tinkle',
																		 sql: "create table if not EXISTS joingroup(userid varchar(50) not null, gid VARCHAR(20) not null,jointime VARCHAR(20) not null)"
																 }, function(ret, err){
																		 if( ret.status ){
																				console.log("进入群组时间表创建或存在表    成功...");
																		 }else{
																			//  console.log(JSON.stringify(err));
																				 console.log("进入群组时间表创建或存在表   失败...");
																		 }
																 });


														// var timestamp=new Date().getTime()-6*24*60*60*1000;
														//使用同步接口判断是否需不需获取七天的历史消息把这些历史消息
													// var resultset=db.selectSqlSync({    //查询当前用户用七天是否有消息
													// 				 name: 'tinkle',
													// 				 sql: "SELECT count(msg_id) as count FROM tin_im_message where create_time>"+timestamp+" and userid='"+c_uiid+"'"
													// 				});
																	// alert(JSON.stringify(resultset));
																//判断最近七天内有没有数据，如果没有的话就进行数据的获取
													// 	setTimeout(function(){
													// 					if(resultset.data[0].count==0){
													//
													// 						console.log("需要获取七天内单聊的历史消息");
													// 							//  getHistroy();
													// 					}else{
													// 							console.log("不需要获取七天内得历史消息,消息可通过其他方式获取");
													// 					}
													// },70)

											 } else {
												 alert("数据失败，请重启应用");
															console.log("打开数据库失败...");
											}
									});

};
