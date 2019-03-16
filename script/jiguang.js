//监听是否有人发送加群申请
JIM.onEventNotification(function(data) {
  alert(JSON.stringify(data));
  if(data.event_type==9){
    alert('刷新页面');
    //refreshfn();

  }
  if(data.event_type == 10){
    alert('有人加群');
  }
  if (data.event_type==56) {

  }

});
var a=document.quer
