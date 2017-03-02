app.controller('queBanCtrl',['$scope',function($scope){
	
}])
app.directive('ngSel',function() {
	return {
		restrict:'AE',
		replace:true,
		link:function($scope,el) {
			
			var type = $('#queBanP .type');  //类别
			type.on('touchend','.right',function() {  //点击所有类别显示，
				var obj = $(this).parent();
				obj.children('.tName').toggleClass('show');
			})
			
			var lists = type.children('.tName');  //类别列表
			lists.on('touchend','li',function() {
				var conNew = $(this).html();  //可选的类别内容
				var conOld = $(this).parent().prev().children('span');  //显示类别的容器
				conOld.html(conNew);  //显示类别内容
			})
			
			
			
			
		}
	}
})