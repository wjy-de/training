app.controller('loginCtrl',['$scope',function($scope){
	$scope.user_quest = [
		{
			user_id:1001,
			user_name:'王姣姣'
		}
	]
	
	$scope.login = function () {
		
		var login = $('#loginP .in');
		login.attr('href',"#/uPractice");
	}
	
	
	

}])
//app.directive("ngLogin",[
//	function() {
//		return {
//			restrict:"AE",
//			template:'<a><button id="login" name="login">登录</button></a>',
//			replace: true,
//			transclude: true,
//			link:function($scope,el) {
//				var login = $('#loginP #login'); //登录按钮
//				var user =$('#loginP #name');
//				login.on('click',function(){
////					if(user.value){
//						login.closest('a').attr('href','#/queBan');
////					}
//				})
//				
//			}
//		}
//	}
//])