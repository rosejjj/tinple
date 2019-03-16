
	var stompClient = null,
		mySocket = null;

	function connect(handling) {

		var sock = new SockJS('http://api.baopinghui.com/socketjs-app');//http://192.168.16.192:8090

		stompClient = Stomp.over(sock); //使用stomp子协议的WebSocket 客户端
		stompClient.connect({}, function(frame) { //链接Web Socket的服务端。token: "ABC123"

			stompClient.subscribe('/app/macro',function(body){
	                    console.log('连接成功了');
	       });
			stompClient.subscribe('/queue/one/' + $api.getStorage('id'), function(body) {
				handling(body.body);
			});
		},function(err){
//			alert(JSON.stringify(err));
		});
	}

	function sendMessage() {
		stompClient.send("/app/one", {}, JSON.stringify({
			'name': 'textasdasdasdas' + "sos",
			'age': 'text' + "-sos"
		}));
	}
